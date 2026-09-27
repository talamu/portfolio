# Video replacement request

_Started 2026-09-05 10:14 UTC_

---

## User

Continuing from "Localish project case study".

## Assistant

We've been building a portfolio case-study page for Localish, a local-tourism app, using the same layout template as the Almansub project. The goal is to showcase the full user research, design process, and app experience through a structured case study with an Overview tab showing app flows and a Case Study tab with problem, solution, and process details.

Key decisions made: we cloned the Almansub layout and applied Localish's color palette (warm off-white, cream, brown, gold). We pulled all case-study text from the presentation PDF (slides 11–15 for Overview, full deck for the Case Study tab). The Overview section now has five numbered blocks covering the app's core user flows (Local search, Building the route, Receiving the route & wandering, A spontaneous event, The tourist decides), each with title and descriptive text. Videos for these sections are still pending — when you upload them, they'll wire into the existing slots with poster images as backgrounds.

Current state: Localish.dc.html is fully structured with both tabs live. The Case Study tab contains all content from the PDF (The Problem with 3 pain points, Who it's for, The Solution, Brand story, How it works with 5-step timeline, The Experience split by user type, and Outcome credited to Tomer & Meitar). The Overview tab displays the five flow blocks with app-screen image placeholders. No render errors — poster images load as background divs, and all redundant attributes have been stripped.

Next steps: drop the four review videos for Overview into chat and I'll slot them into the numbered blocks. If you want to refine any text or add more visual assets, we can do that mid-page.

Files in use: Localish.dc.html, Work.dc.html, Home.dc.html.

## User

replace the photo with this video in the "building the route" section, without the black background in the video frame

## Assistant

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: multi_screenshot]_

_[tool: show_html]_

Wiring the video into block 02 with runtime black-bar cropping (measures the video's black margins and crops/zooms so only the content shows on the cream frame):

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The video is now in the "Building the route" block. On load it measures the video's black margins and auto-crops/zooms so only the app content shows against the cream frame — no black canvas. If the crop looks off (e.g. the video's background isn't pure black), tell me and I'll tune the threshold.

## User

delete the paper color frame leave just the iphone fram

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Done — the cream card, shadow and rounded frame are removed for that block; the video now sits directly on the page background, cropped to just the iPhone frame and centered.

## User

play the video in loop

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The video now starts playing automatically once cropped and loops continuously.

## User

scale up the video frame, and add a background color for the section in this color #04053A , and make the text color in the left to white

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Block 02 now sits on a #04053A panel with rounded corners, white title/text on the left, and the phone video scaled up (~30% larger).

## User

make all the locals side section in the same color design of this one, and in the tourists side change the colors to be this one #F4F0FE for the background, and the texts in black

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

All five blocks now sit on colored panels: local's-side sections (02, 04) in dark #04053A with white text, tourist's-side sections (01, 03, 05) in light #F4F0FE with black text.

## User

delete all the paper color frame in the page, and scale up the phone frame to be in the same size as the video frame in the section 2

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Cream card frames are gone everywhere; the phone screenshots in the other blocks now display as standalone portrait phones sized to match the section 2 video (~720px tall), centered on their colored panels.

## User

change the color of the numbers in all the section to this one #25F179

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Section numbers are now green #25F179 across all five blocks.

## User

make  the colors of the sections to fill all the width of the screen  and the height of the section

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Each section's color now bleeds edge-to-edge across the full screen width and fills the full viewport height, with content centered and sections stacking seamlessly.

## User

make the background color filled all the width of the screen

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The page background is now #F4F0FF edge-to-edge — the body itself carries the color, so no strips show at any screen width.

## User

change the design of the case study page, copy the same design of first 9 slides in the presentation like it is and like all the content, colors, layout, design.

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: read_skill_prompt]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: save_screenshot]_

_[tool: save_screenshot]_

_[tool: get_webview_logs]_

_[tool: save_screenshot]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: view_image]_

_[tool: run_script]_

_[tool: read_file]_

Rebuilding the Case study tab as the 9 deck slides. First, cropping the map artwork from the slide render:

_[tool: run_script]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

Now removing the old remaining case-study sections and adding the flow steps data:

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

_[tool: snip]_

The Case study tab now mirrors the deck's first 9 slides — same Hebrew content (RTL), navy/lavender/purple/green palette, full-screen slide sections with the Localish wordmark footer and slide labels (תומר מיתר תאלא / פרסונות / הבעיה / הפתרון שלנו / ברנד / פלואו), the map artwork on the two stat slides, the purple statement slide, the big brand wordmark with the arrow note, and the 5-box flow diagram. Note: the stats show "00%" exactly as in the deck — give me the real numbers and I'll drop them in.

## User

replace the photo with this video in the 03 section https://res.cloudinary.com/a9hkhucx/video/upload/v1788606849/Screen_Recording_2026-09-03_182054_sgurxh.mp4

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: read_file]_

_[tool: read_file]_

The file was reverted to the earlier case-study version between turns — leaving that as-is and just wiring the video. Clearing the now-empty poster for section 03:

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Section 03 now plays the Cloudinary video in place of the photo. One note: the file looks like it was reverted to the pre-redesign case-study version between turns — if that revert was unintentional and you still want the 9-slide deck design in the Case study tab, say the word and I'll reapply it.

## User

change the layout design of the sections to be matches the screenshot, 2\3 with background and the video frame, and 1\3 for the text

## User

change the layout design of the sections to be matches the screenshot, 2\3 with background and the video frame, and 1\3 for the text

## User

make all the background color this one #04053A

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

All five section video panels now use the navy #04053A background.

## User

replace the photo in the first section to this video, remove the black background in the video frame https://res.cloudinary.com/a9hkhucx/video/upload/v1788607695/localish_part_1_wayqjy.mp4

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Section 01 now plays the new video with the black bars cropped away (cross-origin videos are now handled so the crop works on Cloudinary files too).

## User

Re-running the check

## Assistant

_[tool: ready_for_verification]_

Re-ran the check — the verifier is reviewing the page and will flag anything broken; no news is good news.

## User

Found issues — fixing…

## Assistant

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Fixed: when the crop detection hits a tainted canvas, the video now reloads with CORS enabled and retries the measurement (with a longer fallback window), so the Cloudinary video in section 01 gets its black bars cropped like the local ones. Out for review.

## User

there is a black lines from the background remove it

## Assistant

_[tool: eval_js_user_view]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The crop now shaves slightly inward past the detected edge, removing the residual thin black lines around the video. Refresh if you still see them.

## User

do not crop just remove the black color background

## Assistant

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Changed approach: the video is no longer cropped or scaled — instead the black background itself is made transparent via an alpha mask (only black connected to the frame edge is removed, so dark content inside the phone stays intact). Out for review.

## User

Re-running the check

## Assistant

_[tool: ready_for_verification]_

Re-ran the check — the verifier is reviewing the mask-based background removal and will flag anything broken.

## User

replace the photo with this video in the 04 section https://res.cloudinary.com/a9hkhucx/video/upload/v1788607761/Screen_Recording_2026-09-03_182227_ozj9mw.mp4

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Section 04 now plays the new Cloudinary video in place of the photo.

## User

replace the photo with this video in the 05 section https://res.cloudinary.com/a9hkhucx/video/upload/v1788611065/Screen_Recording_2026-09-05_152353_w8rz8z.mp4

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Section 05 now plays the new Cloudinary video in place of the photo.

## User

add this logo in place of the name of the project in the opening of the page

## Assistant

_[tool: grep]_

_[tool: copy_files]_

_[tool: run_script]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The page header now shows the Localish logo (background removed, trimmed) in place of the icon + project name.

## User

make sure all the video frames is in the same size

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

All five video frames now share the same fixed height (up to 660px, capped at 70% of the viewport), so the phone screens render at a consistent size across sections regardless of each video's own dimensions.

## User

Found issues — fixing…

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

Clicking Overview now smooth-scrolls down to the first section (01) of the overview flow.

## User

remove the black background

## Assistant

_[tool: grep]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The black-background removal now runs on every video, so section 02 (and all others) get the transparent background treatment, not just section 01.

## User

add the logo image that i sent to you, apove the paragraph

## Assistant

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added the Localish logo above the Brand paragraph.

## User

in the " how it works section " change the content design to match the design in this screenshot but keep the content in English

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The "How it works" flow now matches the screenshot: navy-outlined lavender boxes connected by dashed lines, a green asterisk under each, and a short description below — in English, left-to-right.

## User

match the height of the rectangular to be the all in\ same height

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

All five boxes now share a fixed 64px height with the label centered, and the connector lines align with their middle.

## User

add this video to the app store section in place of the text on the right column https://res.cloudinary.com/a9hkhucx/video/upload/v1788785088/Screen_Recording_2026-09-07_153613_utqkmt.mp4

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The APP STORE section's right column now plays the new video (looping, black background removed like the others) in place of the four text paragraphs.

## User

scale down the video frame

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Scaled the App Store video frame down to a 560px max width.

## User

scale down more and move it to the right to be centered under the text in the section before it

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Scaled down to 440px and centered it within the right column.

## User

make the height of the video frame the same height of the videos that in the overview page

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The App Store video frame now uses the same height as the overview videos (min(70vh, 660px)).

## User

match all the section layout to be two columns, the right column is 1\3 the width of the screen and the lift column  is 2\3 the width,

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

All case-study sections now use the two-column split: left column 2/3 of the width, right column 1/3.

## User

change it , the right column is 2\3 and the left one is 1\3

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Flipped: left column is now 1/3, right column 2/3.

## User

match this section layout to the others layout

## Assistant

## Assistant

## Assistant

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The App Store video now sits flush in the right column like the other sections' content — full column width (capped at the same 44em as the text blocks), no fixed height or centering offset.

## User

change the background color in the right column to white , keep the background color in the left column like it is

## Assistant

_[tool: read_file]_

_[tool: read_file]_

_[tool: eval_js_user_view]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

All right (content) columns in the Case study tab now have a white background with a bit of inner padding; the left label column keeps the page's cream background.

## User

make the white background fill all the height of the sections

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The white background now stretches the full height of each section row.

## User

i want it to fill the width and height including the margins between the section like it is in the overview page

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The white background is now full-bleed across the whole Case study area — edge to edge of the screen, covering the sections and the margins between them, like the overview sections.

## User

change the numbers color to #25F179

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The three problem numbers (01, 02, 03) are now green #25F179.

## User

change all the titles colors to #000252

## Assistant

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

All section titles (the uppercase labels) and the bold lead-in titles are now navy #000252.

## User

switch between the bottoms , place the case study from the left and the overview from the right, and when the user open the localish project page , it will be open with the case study page

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: grep]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_set_props]_

_[tool: ready_for_verification]_

Done: Case study is now the left button, Overview the right, and the page opens on the Case study tab by default (a `defaultView` tweak lets you switch that back).

## User

add a bottom that moved to the overview page, called "show the app"

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added a "Show the app →" button under the Outcome paragraph — navy pill (green on hover) that switches to the Overview tab and scrolls to the first section.

## User

change the black color to this one #000252

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The active tab pill in the Case study / Overview switcher is now navy #000252 instead of black.

## User

fix the columns layout in this section its not matches the sections layout, match the widths of the columns

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Fixed — the App Store section now uses the same column widths as the other sections (1/3 label, 2/3 content capped at 44em); the video's fixed height was what pushed it wider, so it now fills the column width instead.

## User

scale down the video size to see the full frame of the video without scrolling, keep every thing else like it is

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The App Store video now caps its size so the full frame fits in the viewport without scrolling; everything else is unchanged.

## User

its not changed

## Assistant

_[tool: eval_js_user_view]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Fixed — the video turned out to be a tall phone-shaped frame after the background removal, so it's now sized by height (viewport height minus the header) instead of width; the full frame fits on screen without scrolling.

## User

delete this

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Deleted the category buttons row (UI UX / Illustrations / Branding / Visual design) from the Work page header.

## User

now we will design the page of the coffetrack project, here is the presentation that have all the details , match the page layout with the localish page layout just change the content and the colors to match the details in the file i attached, leave a place holders to add the videos in the overview page https://www.figma.com/deck/wZklhG7ugkTnXOVn6NERmj

## Assistant

_[tool: list_files]_

_[tool: web_fetch]_

_[tool: tool_search_tool_bm25]_

I can't open Figma deck links — no access to figma.com. Easiest path: in Figma, export the deck as PDF (Share → Export → PDF) and drop it here, like you did with the Localish PDF. Once I have it, I'll build CoffeeTrack.dc.html with the Localish page layout — same two-tab structure (Case study / Overview), same section system — with CoffeeTrack's content and colors, and video placeholders in the Overview sections.

## User

<attached_files>
- uploads/Data Produc.pdf
</attached_files>

## Assistant

_[tool: run_script]_

_[tool: write_file]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: multi_screenshot]_

_[tool: multi_screenshot]_

_[tool: multi_screenshot]_

_[tool: read_file]_

_[tool: dc_write]_

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Built CoffeTrack.dc.html with the exact Localish page layout, adapted to CaffiTrack:

- **Colors from the deck**: cream #FCF2E6 background, coffee brown #5C3A17 titles/accents/buttons, white full-bleed case-study panel
- **Case study tab** (default): Brief, Job to be done, User journey (4 numbered stages), Flow mapping (5-box diagram in brown), Iterations & wireframes (with your three app screens), User testing (objectives, highlights, issues), Next steps + "Show the app →" button
- **Overview tab**: 5 numbered flow sections (brown video panel + white text column) with video placeholders — sections without a poster show a "Video coming soon" slot; drop the videos in chat and I'll wire them in
- The Work page's CoffeTrack arrow now links to the new page

## User

add a section for the brand, and another one for the app store

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added two sections before Next steps: **Brand** (logo mark + CaffiTrack wordmark with a short brand description) and **App store** (a dashed "Video coming soon" placeholder — drop the video in chat and I'll wire it in; the load error is just that placeholder video not existing yet, which is expected and hidden).

## User

change this section content to : outcome , keep the bottom

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Changed the last section to **Outcome** with a summary of the app's value; the "Show the app →" button stays.

## User

replace the photo in the wireframes section with this one i attached

## Assistant

_[tool: copy_files]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Replaced the three wireframe images with your new attached image (wireframes + final screens) at full column width.

## User

remove the paper color background from the photo

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

Removed the cream paper background from the wireframes image — it's now transparent and cropped to the screens, sitting directly on the white section background.

## User

cut the photo to two photos, the two frame in the left one photo and the three frames in the right in another photo, and place them one  under the onother to scale up them

## Assistant

_[tool: run_script]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Split the image in two — the two wireframe phones on top, the three final screens below — stacked and each scaled up to fill the column width.

## User

match the size of the frames

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Sized the top image at 65.8% of the column (the exact width ratio of 2 vs 3 phones), so the phone frames in both rows now render at the same size.

## User

move the flow mapping section to be placed after the user testing section

## Assistant

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Moved the Flow mapping section to sit right after User testing (order is now: Brief, Job to be done, User journey, Iterations & wireframes, User testing, Flow mapping, Brand, App store, Outcome).

## User

https://res.cloudinary.com/a9hkhucx/video/upload/v1788952951/Screen_Recording_2026-09-09_141843_qxxvmg.mp4   add this video to the appstore section

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added the video to the App store section — it replaces the placeholder and plays looping like the others.

## User

scale down it so the user can see the full video frame without scrolling

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Scaled the App store video down so its full frame fits within the viewport height without scrolling.

## User

it is not scalled down

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Now sized by height (viewport minus header) like the Localish App Store video — the background removal reshapes the frame to a tall phone, so the width cap wasn't limiting it. The full frame now fits without scrolling.

## User

change the background to the color brown and make the texts in the white color

## Assistant

_[tool: str_replace_edit]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: grep]_

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: grep]_

_[tool: ready_for_verification]_

The Case study panel is now coffee brown with all texts in white/cream: section labels, paragraphs, bold lead-ins, journey numbers, flow diagram (cream-bordered boxes, white captions), the CoffeeTrack wordmark, and the divider lines — and the "Show the app" button flipped to cream with brown text so it stays visible.

## User

change the background of the opening section to the color brown and make the texts in the white color, keep every thing else like it is

## Assistant

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The opening section now has a full-bleed brown background (from the very top of the page) with all its text in white — title, description, and the Role/Timeline/Team/Tools details. Everything else is unchanged.

## User

Apply drawing

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

The tab band is now brown too — full-bleed, continuous with the header above it; the cream tab pill stays visible on it.

## User

add a brown outline stroke

## Assistant

_[tool: grep]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Added a brown 2px outline (rounded to match the icon shape) around the logo in the Brand section.

## User

remove the white background around the phone frame

## Assistant

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The background removal now detects the video's actual edge color instead of assuming black — so the white around the App store phone frame is removed the same way. Out for review.

