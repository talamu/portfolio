// Work page: mobile menu, header underline that follows the section in view,
// hash landing from other pages, reveal-on-scroll, and copy-email.
(() => {
  const HEADER_OFFSET = 96;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- Mobile menu ----------
  const nav = document.getElementById('site-nav');
  const burger = document.querySelector('.burger');
  const burgerPath = burger.querySelector('path');
  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    burgerPath.setAttribute('d', open ? 'M8 2 32 24M32 2 8 24' : 'M1 1h38M1 13h38M1 25h38');
  };
  burger.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); burger.focus(); }
  });

  // ---------- Header underline follows the section in view ----------
  const links = nav.querySelectorAll('[data-nav]');
  const about = document.getElementById('about');
  const contact = document.getElementById('contact');
  const updateNav = () => {
    const mid = window.innerHeight * 0.5;
    const cur = contact.getBoundingClientRect().top <= mid ? 'contact'
      : about.getBoundingClientRect().top <= mid ? 'about' : 'work';
    links.forEach((a) => {
      if (a.dataset.nav === cur) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  };
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
  window.addEventListener('resize', updateNav);

  // ---------- Land on the hash target once layout has settled (links from project pages) ----------
  const jump = () => {
    const id = location.hash.slice(1);
    if (!id || id === 'top') return;
    const t = document.getElementById(id);
    if (!t) return;
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET, behavior: 'auto' });
  };
  if (location.hash) {
    requestAnimationFrame(jump);
    window.addEventListener('load', jump, { once: true });
  } else {
    // fresh open: always start at the top (browsers otherwise restore the last scroll position)
    try { history.scrollRestoration = 'manual'; } catch (_) { /* unsupported */ }
    window.scrollTo(0, 0);
    setTimeout(() => { if (!location.hash) window.scrollTo(0, 0); }, 50);
  }

  // ---------- Reveal on scroll ----------
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-revealed');
        obs.unobserve(e.target);
      });
    }, { threshold: 0.15 });
    const vh = window.innerHeight;
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.9) return;
      el.classList.add('reveal-pending');
      obs.observe(el);
    });
  }

  // ---------- Copy email on click ----------
  const email = document.querySelector('[data-copy]');
  const status = document.querySelector('.copy-status');
  let statusTimer;
  const copied = () => {
    status.textContent = 'Copied';
    clearTimeout(statusTimer);
    statusTimer = setTimeout(() => { status.textContent = ''; }, 1800);
  };
  const legacyCopy = (text) => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;';
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand('copy'); } catch (_) { /* unsupported */ }
    ta.remove();
    return ok;
  };
  email.addEventListener('click', (e) => {
    e.preventDefault();
    const text = email.dataset.copy;
    const fallback = () => {
      if (legacyCopy(text)) { copied(); return; }
      // last resort: select the address so it can be copied by hand
      const r = document.createRange();
      r.selectNodeContents(email);
      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
    };
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(copied, fallback);
    else fallback();
  });
})();
