# DQ2 HTML Edition - Handoff Notes

## 2026-02-10 Phase 0: Minimal Engine
- Added:
  - Canvas game loop (update/render at 60fps via requestAnimationFrame)
  - Input system: Arrow keys for movement, Z/Enter for confirm, single-press detection (consumeKey)
  - Game states: TITLE, EXPLORE, DIALOG (BATTLE/MENU prepared)
  - FC-style title screen with blinking text ("ドラゴンクエストII 悪霊の神々")
  - Player movement with collision detection (sea/wall/mountain = impassable)
  - Walk tempo control (150ms delay between steps, FC DQ2-like feel)
  - 4-directional player sprites (up/down/left/right)
  - Tile types: grass, sea, wall, floor, mountain, town (6 types)
  - 16x16 test world map with varied terrain
  - Canvas-drawn FC-style message window (drawWindow with double-border)
  - showMessage(text, callback) API for dialog system
  - All UI rendered on Canvas (removed HTML overlay elements)

- Spec notes:
  - FC DQ2 resolution: 256x240, displayed at 512x480 (2x scale via CSS)
  - Tile size: 16x16 pixels
  - Move delay: 150ms (adjustable, may need tuning vs FC original)
  - Window style: white double-border on black, matching FC DQ aesthetic

- Verification:
  - [x] Canvas initializes and shows title screen
  - [x] Enter/Z transitions from title to field
  - [x] Arrow keys move player 1 tile at a time
  - [x] Player cannot walk into sea, wall, or mountain tiles
  - [x] Player sprite changes direction
  - [x] Message window can be displayed (via console: engine.showMessage("test"))
  - [ ] Walk tempo matches FC DQ2 (needs side-by-side comparison)

- Known issues:
  - Map is only 16x16 (fits on screen), no scrolling yet
  - No camera/viewport system for larger maps
  - Player starts at hardcoded position (5,5)
  - No encounter system yet
  - No menu (pressing X/Esc does nothing yet)

- Next:
  - Phase 1-1: Scrolling viewport for larger world map
  - Phase 1-2: Random encounter system (step count + terrain modifier)
  - Phase 1-3: Field → Battle transition → Field return
