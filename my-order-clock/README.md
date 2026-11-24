# My Order Clock

A self-playing data visualization of four years of food-delivery orders from Wolt and Haat.

Each order is a dot on a 24-hour dial:

- **Angle**: the hour of the day the order was placed
- **Distance from the centre**: the date, from 2022 outward
- **Size**: the amount in shekels
- **Colour**: the food type
- **Empty ring**: an attempt that was not completed

Controls: year, food type, app, speed, unfinished attempts, pause, restart and sound.

## Running it

Open `index.html` in a browser. It is a single file with no build step; the only outside request is the Readex Pro web font.

Layouts are included for phones, desktop, 1080 × 1920 and 1920 × 1080.

## Data

The orders are written inside `index.html` as one line each: date and time, amount, venue, branch and app. They were transcribed by hand from screenshots of the two apps' order histories. To add an order, add a line in the same format.
