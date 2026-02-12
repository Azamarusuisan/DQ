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

## 2026-02-11 Bug Fix Phase - Critical Gameplay Fixes

### Fixed Bugs:

1. **[致命的] 戦闘が1ラウンドで終了するバグ**
   - 原因: resultフェーズ後に常に`phase='end'`へ遷移。敵が生存していても戦闘終了していた
   - 修正: resultメッセージ表示後、全敵撃破→end、未撃破→selectに戻って次ラウンド

2. **レベルアップが1レベルしか上がらないバグ**
   - 原因: `lvUp()` が1レベルアップ時点で即`return true`
   - 修正: whileループで全レベルアップ処理後にreturn

3. **戦闘中アイテムが一番上しか使えないバグ**
   - 原因: `act.idx`(配列インデックス)保存、先行アイテム消費でインデックスずれ
   - 修正: `act.itemId`でID保存、`findIndex`検索に変更
   - 追加: 戦闘中のせかいじゅのは(revive)対応

4. **フィールドでアイテムが使えないバグ**
   - 原因: `useItem`でheal/cureのみ対応、他は全て「ここではつかえない」
   - 修正: キメラのつばさ(field)、せかいじゅのは(revive)、いのちのきのみ等(stat)対応

5. **NPCと重なるバグ**
   - 原因: `tryMove`にNPC衝突判定がなかった
   - 修正: 室内マップでNPC座標への移動を禁止

6. **ゾーンバランス(強すぎる敵)**
   - 湖の洞窟: zone 1→0、er 12→16 (序盤ダンジョンに適正化)
   - ロンの洞窟: zone 2→1、er 8→16
   - ドラゴンの角: er 10→16
   - ハーゴン神殿: er 6→12
   - ワールドマップ: cave/tower/bridgeタイルでエンカウント除外

7. **戦闘UI呪文・アイテムカーソル共有バグ**
   - 原因: select/spell/itemフェーズで`bs.cursor`共有
   - 修正: `bs.spellCursor`, `bs.itemCursor`に分離

8. **ショップ装備がヒーロー固定**
   - 修正: 購入時にwho配列チェック、装備可能なキャラに装備

9. **そうびメニューが表示のみ**
   - 修正: カーソル選択+Zキーで装備を外す機能追加

10. **はなす:NPC不在時にフィードバックなし**
    - 修正:「だれもいない。」メッセージ表示

11. **ダンジョン宝箱が到達不可能な場合がある**
    - 原因: placeChestのBFSが「最寄りfloor」まで彫るだけで入口と非接続の可能性
    - 修正: 宝箱から入口(top center)までL字廊下を確実に彫る方式に変更

### バランスシミュレーション結果:

- **Zone 0** (序盤): Lv1でもスライム一撃。~5戦でLv3。安定
- **Zone 1** (中盤): Lv5パーティで安定。ベホイミ習得後は持久戦可能
- **Zone 2** (後半): Lv7+はやぶさのけん(2hit)で安定
- **Zone 3** (ハーゴン神殿): Lv9+ロト装備で対応可能
- **ハーゴン** (HP200, ATK80, DEF60): Lv9パーティで火力135/turn > 回復80HP。2-3ターン撃破
- **シドー** (HP300, ATK120, DEF80): Lv9パーティで火力115/turn > 回復80HP。3ターン撃破
- イオナズン全体70ダメージ → 合計HP257で1発耐えられる

### レベリング目安 (クリアまで):
- Lv1→3: Zone0で~5戦 (サマルトリア行く前に)
- Lv3→5: Zone0-1で~25戦 (仲間集め中に自然達成)
- Lv5→8: Zone1で~28戦 (ロンの洞窟あたりで)
- Lv8→9: Zone2で~10戦 (ドラゴンの角で)
- **推奨クリアレベル: Lv9-10** (ロト装備前提)

### クリアまでの想定プレイ時間:
- 戦闘~70回 + 探索・イベント → 約30-45分

### Story Flow (変更なし):
1. ローレシア城(12,14) → 周辺でLv3まで
2. サマルトリア城(16,40) → 王子加入
3. 湖の洞窟(20,22) → ラーのかがみ & ぎんのカギ
4. ムーンペタ(28,42) → 王女加入
5. ショップで装備強化 (はがねのつるぎ500G, くさりかたびら300G)
6. ロンの洞窟(45,28) → ふねのきっぷ & はやぶさのけん
7. ベラヌール(42,18) → 船入手
8. ドラゴンの角(40,40) → ロトのつるぎ & みずのはごろも
9. 船でハーゴン島(55,50)へ → ハーゴン → シドー → ENDING

### 現在の既知問題:
- コードが圧縮スタイル(1行関数)で可読性が低い
- 装備メニューで装備変更(付け替え)は未実装（外すのみ）
- 復活の呪文のencode/decodeの完全テストは未実施
- ワールドマップのプロシージャル生成のため、稀にルートが森で塞がれる可能性（基本はpath clearで対応済み）

### 次のステップ候補:
- 装備メニューの装備変更UI
- 戦闘エフェクト（フラッシュ、効果音的な演出）
- NPCの見た目バリエーション
- ミニマップ表示
- 戦闘のターゲット選択

## 2026-02-12 Next.js移行 + 大規模バグ修正

### 技術移行:
- **index.html (1528行)** → **Next.js 16 (TypeScript, App Router)** に移行
- プロジェクト: `dq2-app/`
- 構成:
  - `src/app/page.tsx` - ゲーム画面
  - `src/app/layout.tsx` - ルートレイアウト
  - `src/app/globals.css` - CSS (元HTMLから移植)
  - `src/components/GameCanvas.tsx` - Canvas + タッチパッド
  - `src/game/engine.ts` - ゲームエンジン全体 (`initGame(canvas)` でラップ)
- `@ts-nocheck` + `eslint-disable` で元コードをそのまま動作させる
- 起動: `cd dq2-app && npm run dev` → `http://localhost:3002`

### 修正したバグ (6件):

1. **[致命的] エンディング画面フリーズ**
   - 原因: `drawEnding()` にキー入力処理なし。シドー倒した後永久にフリーズ
   - 修正: `G.endPhase` を導入 ('story' → 'jumon')
     - story: THE END表示後にAボタンで復活の呪文へ
     - jumon: 復活の呪文表示 + コピー機能 + Aボタンでタイトルへ

2. **[機能変更] 仲間システム: スカウト → イベント加入**
   - 酒場の「スカウト」メニューを削除 (いれかえ/はずすのみ)
   - LEGACY_CHARSに `recruitType` と `recruitCond` を追加
   - 3カテゴリの仲間加入:
     - **boss (6人)**: 中ボス撃破で加入 (ドラゴン/アームライオン/キラーマジンガ/ゾーマ/エスターク/ダークドレアム)
     - **npc (6人)**: 条件付きNPC会話で加入 (クリフト/フローラ/バーバラ/ミネア/ベロニカ/セーニャ)
     - **story (5人)**: ストーリー進行で自動加入 (ビアンカ/マーニャ/ハッサン/ヤンガス/ゼシカ)
   - `checkRecruitEvents()` を追加 (60フレームごとにチェック)
   - 新中ボスモンスター3体追加: ドラゴン(HP180), アームライオン(HP220), キラーマジンガ(HP350)
   - 中ボス配置: lake_cave(12,12), ron_cave(15,12), dragon_horn(7,8)

3. **[バグ] 馬車の入れ替えがメニューからできない**
   - メインメニューに「いれかえ」を追加 (さくせんの次)
   - `wagon_swap` ページを新設 (酒場のswapロジックを流用)
   - どこでもパーティと馬車メンバーの入れ替えが可能に

4. **[バグ] 復活の呪文がスマホでコピーできない**
   - `copyToClipboard()` 関数を追加 (navigator.clipboard + fallback)
   - ゲームオーバー画面・エンディング画面の両方で動作

5. **[UX] スマホでZ/Xキー表示が意味不明**
   - `isMobile` 判定 + `btnLabel()` ヘルパーを追加
   - スマホ→「Aボタン」「Bボタン」、PC→「Zキー」「Xキー」
   - ゲームオーバー画面・エンディング画面・馬車入れ替え画面に適用

6. **[バグ] 裏ボスイベントがcheckBossEvents関数外**
   - ゾーマ/エスターク/ダークドレアムのif文がcheckBossEvents()の外にあり、毎フレーム実行されていなかった
   - checkBossEventsの閉じ括弧を修正し、全ボスイベントを関数内に統合

### ファイル構成:
```
dq2-app/
├── package.json
├── next.config.ts
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── page.tsx          # 'use client' + GameCanvas
│   │   ├── layout.tsx        # メタデータ
│   │   └── globals.css       # 全スタイル
│   ├── components/
│   │   └── GameCanvas.tsx     # Canvas + タッチパッド + engine動的import
│   └── game/
│       ├── engine.ts          # ゲームエンジン全体 (initGame()でexport)
│       ├── constants.ts       # (空 - 今後分割用)
│       ├── types.ts           # (型定義 - 今後分割用)
│       ├── data/              # (空 - 今後分割用)
│       ├── map/               # (空 - 今後分割用)
│       ├── render/            # (空 - 今後分割用)
│       ├── systems/           # (空 - 今後分割用)
│       └── save/              # (空 - 今後分割用)
```

### 仲間加入イベント一覧:
| キャラ | ID | タイプ | 加入条件 | Lv |
|--------|-----|--------|----------|-----|
| ロトのゆうしゃ | 3 | boss | ドラゴン撃破 | 5 |
| アリーナ | 4 | boss | アームライオン撃破 | 8 |
| クリフト | 5 | npc | パーティ3人以上 | 8 |
| ビアンカ | 6 | story | パーティ3人揃い | 10 |
| フローラ | 7 | npc | 船入手後 | 10 |
| テリー | 8 | boss | キラーマジンガ撃破 | 15 |
| バーバラ | 9 | npc | 職業★8達成 | 12 |
| エイト | 10 | boss | ゾーマ撃破 | 20 |
| ゼシカ | 11 | story | 誰かLv15到達 | 18 |
| カミュ | 12 | boss | エスターク撃破 | 15 |
| イレブン | 13 | boss | ダークドレアム撃破 | 25 |
| マーニャ | 14 | story | ダーマ初訪問 | 10 |
| ミネア | 15 | npc | 王女加入後 | 10 |
| ハッサン | 16 | story | 船入手時 | 12 |
| ヤンガス | 17 | story | 初宝箱開封 | 15 |
| ベロニカ | 18 | npc | ハーゴン撃破後 | 18 |
| セーニャ | 19 | npc | ハーゴン撃破後 | 18 |

### 既知の問題:
- engine.tsは依然1ファイル1550行（今後モジュール分割予定）
- `@ts-nocheck`で型チェック無効化中
- 仲間の自動加入メッセージが探索中に突然表示される（UX改善余地あり）
- 中ボスのスプライト描画が汎用モンスター描画になる（専用スプライト未実装）

### 次のステップ:
1. ゲームクリアまでの通しテスト
2. engine.tsのモジュール分割（data → render → systems → save の順）
3. TypeScript型定義の追加
4. 中ボス専用スプライト
5. 仲間加入演出の改善（BGM変更、画面エフェクト）
