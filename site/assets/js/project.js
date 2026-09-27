// Project pages: Case study / Overview views (hash-routed, no reload), lazy in-view video
// playback, flat-background removal for phone recordings, and the back arrow on dark panels.
(() => {
  const HEADER_OFFSET = 96;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Views ----------
  const views = {};
  document.querySelectorAll('[data-view]').forEach((el) => { views[el.dataset.view] = el; });
  const toggleLinks = document.querySelectorAll('.view-toggle a');
  const defaultView = document.body.dataset.defaultView || 'case-study';
  const viewFromHash = () => {
    const h = location.hash.slice(1);
    return views[h] ? h : null;
  };

  const show = (name) => {
    Object.entries(views).forEach(([key, el]) => { el.hidden = key !== name; });
    toggleLinks.forEach((a) => {
      if (a.hash === '#' + name) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    updateBackArrow();
  };
  const scrollToView = (name) => {
    setTimeout(() => {
      const el = views[name];
      if (!el) return;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: reduceMotion ? 'auto' : 'smooth' });
    }, 60);
  };

  window.addEventListener('hashchange', () => {
    // back to the bare URL (browser back) returns to the default view
    const v = viewFromHash() || (location.hash ? null : defaultView);
    if (!v) return;
    show(v);
    scrollToView(v);
  });
  // links to the view that's already in the URL don't fire hashchange; still scroll to it
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a || !views[a.hash.slice(1)] || a.hash !== location.hash) return;
    e.preventDefault();
    show(a.hash.slice(1));
    scrollToView(a.hash.slice(1));
  });

  // ---------- Back arrow turns white over dark panels ----------
  const back = document.querySelector('.back-link');
  const darkPanels = document.querySelectorAll('[data-dark]');
  function updateBackArrow() {
    if (!back || !darkPanels.length) return;
    const r = back.getBoundingClientRect();
    const x = r.left + r.width / 2, y = r.top + r.height / 2;
    const onDark = [...darkPanels].some((el) => {
      if (el.closest('[hidden]')) return false;
      const b = el.getBoundingClientRect();
      return x >= b.left && x <= b.right && y >= b.top && y <= b.bottom;
    });
    back.classList.toggle('on-dark', onDark);
  }
  if (darkPanels.length) {
    window.addEventListener('scroll', updateBackArrow, { passive: true });
    window.addEventListener('resize', updateBackArrow);
  }

  // ---------- Videos: load when near, play only while in view ----------
  const videos = document.querySelectorAll('video[data-src]');
  const allowPlay = !reduceMotion;
  const tryPlay = (v) => {
    // play-once videos hold their last frame instead of restarting when scrolled back to
    if (allowPlay && v.dataset.inView && v.dataset.loaded && !(v.ended && !v.loop)) v.play().catch(() => {});
  };

  const prepare = (v) => {
    if (v.dataset.loaded) return;
    v.dataset.loaded = '1';
    v.muted = true;
    v.addEventListener('error', () => { v.style.display = 'none'; }, { once: true });
    if (v.dataset.bgRemoval) v.crossOrigin = 'anonymous';
    if (v.dataset.poster) v.poster = v.dataset.poster;
    v.src = v.dataset.src;
    if (v.dataset.bgRemoval) removeBackground(v);
    tryPlay(v);
  };

  if ('IntersectionObserver' in window) {
    const near = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        prepare(e.target);
        near.unobserve(e.target);
      });
    }, { rootMargin: '100% 0px' });
    // watch the frame, not the video: once masked, the video is oversized inside a clipping box
    // and its own visible ratio never reaches the threshold
    const inView = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const v = e.target.querySelector('video');
        if (e.isIntersecting) { v.dataset.inView = '1'; tryPlay(v); }
        else { delete v.dataset.inView; v.pause(); }
      });
    }, { threshold: 0.35 });
    videos.forEach((v) => { near.observe(v); inView.observe(v.parentElement); });
  } else {
    videos.forEach(prepare);
  }

  // ---------- Background removal ----------
  // Samples a small frame, flood-fills the flat background connected to the frame edge,
  // masks it out, then resizes the box to the visible content's proportions.
  //   data-bg-removal="black" — background is near-black
  //   data-bg-removal="edge"  — background is whatever color the corners are (e.g. white)
  //   data-trim-rows          — keep only the tallest block of content rows (drops UI under the phone)
  function removeBackground(v) {
    const box = v.parentElement;
    const poster = box.querySelector('.phone-poster');
    let tries = 0;
    let masked = false;
    const reveal = () => { v.classList.add('is-ready'); tryPlay(v); };

    const measure = () => {
      if (masked) return;
      const vw = v.videoWidth, vh = v.videoHeight;
      if (!vw) return;
      const W = 320, H = Math.max(2, Math.round(320 * vh / vw));
      const c = document.createElement('canvas');
      c.width = W; c.height = H;
      const ctx = c.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(v, 0, 0, W, H);
      let d;
      try { d = ctx.getImageData(0, 0, W, H).data; } catch (_) { reveal(); return; } // no CORS: show as-is

      let isBgColor;
      if (v.dataset.bgRemoval === 'edge') {
        const corners = [0, W - 1, (H - 1) * W, H * W - 1];
        const avg = [0, 1, 2].map((ch) => corners.reduce((s, p) => s + d[p * 4 + ch], 0) / 4);
        isBgColor = (p) => Math.abs(d[p * 4] - avg[0]) < 30 && Math.abs(d[p * 4 + 1] - avg[1]) < 30 && Math.abs(d[p * 4 + 2] - avg[2]) < 30;
      } else {
        isBgColor = (p) => d[p * 4] < 30 && d[p * 4 + 1] < 30 && d[p * 4 + 2] < 30;
      }

      // flood-fill background-colored pixels reachable from the border
      const bg = new Uint8Array(W * H);
      const stack = [];
      for (let x = 0; x < W; x++) stack.push(x, (H - 1) * W + x);
      for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1);
      while (stack.length) {
        const p = stack.pop();
        if (bg[p] || !isBgColor(p)) continue;
        bg[p] = 1;
        const x = p % W, y = (p / W) | 0;
        if (x > 0) stack.push(p - 1);
        if (x < W - 1) stack.push(p + 1);
        if (y > 0) stack.push(p - W);
        if (y < H - 1) stack.push(p + W);
      }
      const isContent = (p) => !bg[p] && !isBgColor(p);
      let anyContent = false;
      for (let p = 0; p < W * H; p++) if (isContent(p)) { anyContent = true; break; }
      if (!anyContent) {
        // blank first frame (fade-in); try again on a later frame
        if (tries++ < 8) v.addEventListener('timeupdate', measure, { once: true });
        return;
      }

      if ('trimRows' in v.dataset) {
        const rowHas = new Uint8Array(H);
        for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) if (isContent(y * W + x)) { rowHas[y] = 1; break; }
        let bestS = 0, bestE = -1, s = -1;
        for (let y = 0; y <= H; y++) {
          if (y < H && rowHas[y]) { if (s < 0) s = y; }
          else if (s >= 0) { if (y - s > bestE - bestS + 1) { bestS = s; bestE = y - 1; } s = -1; }
        }
        if (bestE >= bestS) for (let y = 0; y < H; y++) if (y < bestS || y > bestE) bg.fill(1, y * W, y * W + W);
      }

      // alpha mask: transparent on background, dilated 1px to kill fringe lines
      const m = document.createElement('canvas');
      m.width = W; m.height = H;
      const mctx = m.getContext('2d');
      const mi = mctx.createImageData(W, H);
      let minX = W, minY = H, maxX = -1, maxY = -1;
      for (let p = 0; p < W * H; p++) {
        const x = p % W, y = (p / W) | 0;
        const edge = (x > 0 && bg[p - 1]) || (x < W - 1 && bg[p + 1]) || (y > 0 && bg[p - W]) || (y < H - 1 && bg[p + W]);
        mi.data[p * 4 + 3] = bg[p] || edge ? 0 : 255;
        if (isContent(p)) {
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
      mctx.putImageData(mi, 0, 0);
      const url = 'url(' + m.toDataURL() + ')';
      v.style.webkitMaskImage = url;
      v.style.maskImage = url;
      v.style.webkitMaskSize = '100% 100%';
      v.style.maskSize = '100% 100%';

      // size the box to the content and oversize the video so the content fills it exactly
      if (maxX > minX && maxY > minY) {
        const nx = minX / W, ny = minY / H;
        const nw = (maxX - minX + 1) / W, nh = (maxY - minY + 1) / H;
        box.style.aspectRatio = String((nw * vw) / (nh * vh));
        Object.assign(v.style, {
          inset: 'auto',
          left: (-nx / nw * 100) + '%',
          top: (-ny / nh * 100) + '%',
          width: (100 / nw) + '%',
          height: (100 / nh) + '%',
          objectFit: 'fill',
        });
      }
      if (poster) poster.style.opacity = '0';
      masked = true;
      reveal();
    };

    v.preload = 'auto';
    if (v.readyState >= 2) measure();
    else v.addEventListener('loadeddata', measure, { once: true });
    // slow network: show the video unmasked rather than nothing
    setTimeout(() => { if (!masked) reveal(); }, 8000);
  }

  // ---------- Init ----------
  show(viewFromHash() || defaultView);
})();
