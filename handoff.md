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

## 2026-02-10 Phase 1: Field + Encounter + Battle Transition
- Added:
  - 32x32 procedural world map (island with sea border, mountains, castle, towns, lakes)
  - Camera/viewport system: player always centered, clamps at map edges
  - Random encounter system: 1/12 chance per step on grass tiles
  - Monster data: スライム, おおなめくじ, ドラキー (3 types with stats)
  - Battle state with phases: start → command → player_result → enemy_turn → end
  - Battle commands: たたかう / にげる (cursor selection with ▶)
  - にげる: 50% success rate (FC DQ2 style)
  - Simple damage calculation (placeholder, ~3-7 per hit)
  - Enemy attack with damage display
  - Victory: EXP/Gold message display
  - Battle → Field return after victory or escape
  - FC-style battle UI: enemy sprites, message log window, command window

- Spec notes:
  - Encounter rate: 1/12 per grass step (FC DQ2 varies by area, will refine later)
  - Escape rate: 50% (FC DQ2 formula is more complex, based on agility)
  - Damage: placeholder values, Phase 2 will implement proper FC DQ2 formula
  - Enemy groups: 1-2 random enemies per encounter

- Verification:
  - [x] Map scrolls when player moves, camera follows
  - [x] Player stays centered on screen
  - [x] Camera clamps at map edges (no out-of-bounds rendering)
  - [x] Random encounters trigger while walking on grass
  - [x] Battle screen displays with enemy names and sprites
  - [x] たたかう attacks first enemy, shows damage
  - [x] にげる has ~50% success rate
  - [x] Defeated enemies removed from display
  - [x] Victory shows EXP/Gold earned
  - [x] Battle ends and returns to field
  - [ ] Encounter rate feels right vs FC DQ2 (needs tuning)

- Known issues:
  - No HP tracking for player (damage is shown but not applied)
  - No party stats display during battle
  - Damage formula is placeholder (not FC DQ2 accurate)
  - Only 3 monster types
  - No battle transition effect (instant switch)
  - Enemy "sprites" are just colored rectangles
  - No menu system yet (X/Esc does nothing)

- Next:
  - Phase 2-1: Party stats (HP/MP/LV) for 3 characters
  - Phase 2-2: Full command hierarchy (たたかう/じゅもん/どうぐ/にげる)
  - Phase 2-3: Proper damage formula (FC DQ2 spec)
  - Phase 2-4: Level up system with growth curves
