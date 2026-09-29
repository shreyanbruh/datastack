This folder is not part of the site — it's just where you drop the header images.

Add these three files here (exact names, or update the paths in zensical.toml):

1. logo-left.png
   - Recommended size: 200 x 200px (square), transparent background PNG
   - Displayed at a max height of ~64px, so keep the important part centered

2. logo-right.png
   - Same spec as logo-left.png: 200 x 200px, transparent PNG

3. header-bg.jpg
   - Recommended size: 1920 x 480px (4:1 wide banner)
   - JPG or PNG, it will be cropped/covered to fit any screen width
   - Keep the center third free of important detail — that's where the
     ASCII logo sits on top of it
   - Optional: if you don't want a background image, just delete the
     header_background line from zensical.toml and the header stays solid black

After adding files, rebuild the site (`zensical build` or `zensical serve`) to
see them appear.
