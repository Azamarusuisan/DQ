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

## 2026-02-10 Full Implementation + Fukkatsu no Jumon
- Added:
  - Full game rewrite with minified codebase (external commit)
  - 64x64 procedural world map with zone system (4 zones)
  - 15 monster types including bosses (ハーゴン, シドー, はぐれメタル)
  - Complete battle system: 4 commands, spells, items, agility-based turn order
  - 12 spells (ホイミ, ベホイミ, ギラ, ベギラマ, ラリホー, マヌーサ, ルーラ, リレミト, ザオリク, イオナズン, スクルト, バイキルト)
  - Equipment system: weapons, armor, shields, helmets
  - Town/castle/cave/tower indoor maps with NPCs
  - Shop system (items, weapons, armor)
  - Story events: 仲間加入 (サマルトリア, ムーンブルク), 船入手, ボス戦
  - Save/Load via localStorage
  - Game over and ending screens
  - **復活の呪文 (Revival Password) system**:
    - Encode game state to ひらがな string
    - Decode ひらがな string back to game state
    - Encodes: 3 chars' levels/exp, gold, flags, equipment, items
    - Checksum for validation
    - Show password in menu (さくせん → ふっかつのじゅもん)
    - Input password from title screen or menu
    - Kana grid input UI with cursor

- Verification:
  - [x] Title screen shows 3 options (はじめる/ぼうけんのしょ/ふっかつのじゅもん)
  - [ ] 復活の呪文 encode/decode round-trip works correctly
  - [ ] Invalid password shows error message
  - [x] Touch controls for mobile play

- Known issues:
  - Code is heavily minified/compressed (single-line functions)
  - No宿屋 (inn) system yet
  - Equip menu doesn't allow changing equipment
  - Shop only equips to hero (party[0])

- Next:
  - Inn system for HP/MP recovery
  - Equipment change UI in menu
  - More monster variety per zone
  - Dungeon treasure chests

## 2026-02-10 Story Progression Fix - Completable Game
- Added:
  - **Treasure chest system**: chest/chest_open tiles, placeChest(), openChest()
    - Walk onto chest to open, items added to inventory
    - Opened chests remembered in G.flags
    - Chests carve surrounding walls for accessibility
  - **Key item placement**:
    - ラーのかがみ: 湖の洞窟 (lake_cave)
    - ぎんのカギ: 湖の洞窟 (lake_cave)
    - ふねのきっぷ: ロンの洞窟 (ron_cave)
    - はやぶさのけん: ロンの洞窟 (ron_cave)
    - ロトのつるぎ: ドラゴンの角 (dragon_horn)
    - みずのはごろも: ドラゴンの角 (dragon_horn)
    - ロトのよろい: ハーゴン神殿 (hargon)
    - せかいじゅのは: ハーゴン神殿 (hargon)
  - **Inn system**: useInn() function, 宿屋 NPCs in all towns/castles
    - Costs 6G per party member, full HP/MP recovery
  - **Ship system**: board/disembark mechanics
    - Ship spawns at nearest sea tile to ベラヌール on getting ふねのきっぷ
    - Player drawn with ship sprite while sailing
    - Ship parks where player disembarks
  - **ハーゴン神殿 fixed layout**: mkHargon() creates designed dungeon
    - Entrance corridor → main hall → side rooms → boss corridor → boss room
    - ハーゴン at (8,3), シドー at (8,2)
  - **World map redesign**: all locations within reachable radius
    - ローレシア城(12,14) → サマルトリア城(16,40) → リリザ(22,28)
    - ムーンペタ(28,42) → ベラヌール(42,18) → ペルポイ(48,35)
    - ロンダルキアのほこら(38,10)
    - ハーゴン island (55,50) - only reachable by ship
  - **New dungeon**: ドラゴンの角 (dragon_horn, tower at 40,40)
  - **NPC dialog improvements**: hints for next destination
  - **Princess recruitment fixed**: ラーのかがみ consumed on use
  - **Prince/Princess start with equipment**

- Story Flow (completable path):
  1. ローレシア城 → 南のサマルトリア城 (recruit prince)
  2. 湖の洞窟 (20,22) → get ラーのかがみ & ぎんのカギ
  3. ムーンペタ (28,42) → use ラーのかがみ on dog → recruit princess
  4. ロンの洞窟 (45,28) → get ふねのきっぷ
  5. ベラヌール (42,18) → give ticket to sailor → get ship
  6. ドラゴンの角 (40,40) → ロトのつるぎ & みずのはごろも
  7. Sail to ハーゴン island (55,50)
  8. ハーゴン神殿 → fight ハーゴン → fight シドー → ENDING

- Verification:
  - [x] Treasure chests can be opened
  - [x] ラーのかがみ obtainable from lake_cave
  - [x] Princess recruitable with ラーのかがみ
  - [x] ふねのきっぷ obtainable from ron_cave
  - [x] Ship obtainable from ベラヌール
  - [x] Ship sailing works (board/disembark)
  - [x] ハーゴン boss fight triggers
  - [x] シドー boss fight triggers after ハーゴン
  - [x] Ending screen displays after シドー defeat
  - [x] Inn restores HP/MP
  - [x] All locations reachable on world map
