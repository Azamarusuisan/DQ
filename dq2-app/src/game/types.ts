// ---------------------------------------------------------------------------
// Dragon Quest II -- TypeScript type definitions
// ---------------------------------------------------------------------------

// ===== Spell Target & Type Enums =====

export type SpellTarget = "ally" | "allies" | "enemy" | "enemies" | "self";

export type SpellType =
  | "heal"
  | "damage"
  | "damage_multi"
  | "status"
  | "buff"
  | "field"
  | "revive"
  | "madante"
  | "megante"
  | "drain_mp"
  | "steal"
  | "identify"
  | "mp_give";

export type StatusEffect = "sleep" | "blind" | "poison" | "confuse";
export type BuffEffect = "def_up" | "atk_up" | "agi_up" | "cover";

// ===== Equipment & Item Data =====

export interface SpellData {
  name: string;
  mp: number;
  type: SpellType;
  power?: number;
  target?: SpellTarget;
  effect?: StatusEffect | BuffEffect | string;
  hits?: number;
  defDown?: boolean;
  selfDmg?: number;
  miss?: number;
}

export interface WeaponData {
  id: number;
  name: string;
  atk: number;
  price: number;
  /** Character IDs that can equip this weapon (0=hero, 1=prince, 2=princess). */
  who: number[];
  /** Number of hits per attack (e.g. hayabusa sword = 2). */
  hits?: number;
}

export interface ArmorData {
  id: number;
  name: string;
  def: number;
  price: number;
  who: number[];
}

export interface ShieldData {
  id: number;
  name: string;
  def: number;
  price: number;
  who: number[];
}

export interface HelmetData {
  id: number;
  name: string;
  def: number;
  price: number;
  who: number[];
}

export type ItemType = "heal" | "cure" | "field" | "revive" | "key" | "story" | "stat";

export interface ItemData {
  id: number;
  name: string;
  type: ItemType;
  power?: number;
  price: number;
  cure?: string;
  effect?: string;
  stat?: string;
  value?: number;
}

// ===== Monster Data =====

export interface MonsterDropData {
  type: "item" | "weapon" | "armor" | "shield" | "helmet";
  id: number;
  rate: number;
}

export interface MonsterData {
  name: string;
  hp: number;
  mp: number;
  atk: number;
  def: number;
  agi: number;
  exp: number;
  gold: number;
  spells: string[];
  zone: number[];
  boss?: boolean;
  flee?: number;
  drop?: MonsterDropData;
}

// ===== Job / Class System =====

export interface JobStatMod {
  str: number;
  agi: number;
  maxHp: number;
  maxMp: number;
}

/** Job skill entry: [proficiency required, spell key]. */
export type JobSkillEntry = [number, string];

/** Job requirement: map of job key -> required proficiency, or null for basic jobs. */
export type JobRequirement = Record<string, number> | null;

export interface JobData {
  id: number;
  name: string;
  statMod: JobStatMod;
  skills: JobSkillEntry[];
  req: JobRequirement;
}

// ===== Level Table =====

/**
 * A single level entry: [exp, maxHp, maxMp, str, agi, newSpells[]].
 * Index 0 = level 1 stats.
 */
export type LevelEntry = [number, number, number, number, number, string[]];

/** Full level table: array of LevelEntry indexed by (level - 1). */
export type LevelTable = LevelEntry[];

// ===== Legacy (Guest) Characters =====

export interface LegacyCharData {
  id: number;
  name: string;
  lt: LevelTable;
  joinLv: number;
  desc: string;
}

// ===== NPC Data =====

export interface NpcData {
  x: number;
  y: number;
  name: string;
  msg: string | (() => string);
  inn?: boolean;
  shop?: boolean;
  recruit?: "prince" | "princess";
  giveShip?: boolean;
  dharma?: boolean;
  tavern?: boolean;
}

// ===== Shop Data =====

export interface ShopItemEntry {
  id: number;
  p: number;
}

export interface ShopData {
  items: ShopItemEntry[];
  weapons: ShopItemEntry[];
  armors: ShopItemEntry[];
  shields: ShopItemEntry[];
  helmets: ShopItemEntry[];
}

// ===== Warp Data =====

export interface WarpData {
  map: string;
  x: number;
  y: number;
}

// ===== Map Data =====

export interface MapData {
  w: number;
  h: number;
  /** 2D tile grid [row][col]. */
  data: number[][];
  /** Encounter rate (0 = no random encounters). */
  er: number;
  /** Zone index for encounter table selection. */
  zone?: number;
}

// ===== Inventory Item (runtime) =====

export interface InventoryItem {
  id: number;
  count: number;
}

// ===== Character (runtime) =====

export interface CharaLike {
  id: number;
  name: string;
  lt: LevelTable;
  level: number;
  exp: number;
  hp: number;
  mp: number;
  maxHp: number;
  maxMp: number;
  str: number;
  agi: number;
  /** Computed: str + weapon.atk + atkBuf. */
  atk: number;
  /** Computed: agi/2 + armor.def + shield.def + helmet.def + defBuf. */
  def: number;
  /** Base stat values (before job modifiers). */
  _baseMaxHp: number;
  _baseMaxMp: number;
  _baseStr: number;
  _baseAgi: number;
  spells: string[];
  weapon: number | null;
  armor: number | null;
  shield: number | null;
  helmet: number | null;
  alive: boolean;
  status: string[];
  atkBuf: number;
  defBuf: number;
  job: string;
  jobProf: Record<string, number>;
  learnedSkills: string[];
  /** Computed: union of spells + learnedSkills + current job skills at proficiency. */
  allSkills: string[];
  lvUp(): boolean;
}

// ===== Zukan (Encyclopedia) =====

export interface ZukanData {
  monsters: Record<string, number>;
  items: Record<string, boolean>;
}

// ===== Battle State =====

export interface BattleEnemy {
  name: string;
  hp: number;
  maxHp: number;
  mp: number;
  atk: number;
  def: number;
  agi: number;
  exp: number;
  gold: number;
  spells: string[];
  alive: boolean;
  status: string[];
  boss?: boolean;
  flee?: number;
  drop?: MonsterDropData;
}

export interface BattleAction {
  ai: number;
  type: "atk" | "spell" | "item" | "def";
  tgt?: number;
  spell?: string;
  itemId?: number;
}

export type BattlePhase =
  | "msg"
  | "start"
  | "select"
  | "spell"
  | "skill"
  | "item"
  | "exec"
  | "result"
  | "end";

export interface BattleState {
  enemies: BattleEnemy[];
  cursor: number;
  spellCursor: number;
  skillCursor?: number;
  itemCursor: number;
  partyActs: BattleAction[];
  curActor: number;
  msg: string;
  msgTimer: number;
  phase: BattlePhase;
  nextPhase: string | null;
  resultMsgs: string[];
  resultIdx: number;
}

// ===== Menu State =====

export interface MenuState {
  cursor: number;
  pg?: string;
  ci?: number;
  subPg?: string;
  /** Spell selection cursor in menu. */
  spellCursor?: number;
  /** Equipment sub-page cursor. */
  eqCursor?: number;
  /** Character index being viewed. */
  charIdx?: number;
  /** Item cursor in menu. */
  itemCursor?: number;
  /** Target character cursor. */
  tgtCursor?: number;
  /** Tavern selection state. */
  tSel?: number | null;
  /** Tavern mode. */
  tMode?: string;
}

// ===== Shop State (runtime) =====

export type ShopPage =
  | "main"
  | "buy_item"
  | "buy_weapon"
  | "buy_armor"
  | "buy_shield"
  | "buy_helmet";

export interface ShopState {
  pg: ShopPage;
  cursor: number;
  items: ShopItemEntry[];
  weapons: ShopItemEntry[];
  armors: ShopItemEntry[];
  shields: ShopItemEntry[];
  helmets: ShopItemEntry[];
}

// ===== Chest Reward =====

export interface ChestReward {
  id?: number;
  name?: string;
  count?: number;
  weapon?: number;
  armor?: number;
  shield?: number;
  helmet?: number;
  gold?: number;
}

// ===== Message Queue Entry =====

export interface MsgQueueEntry {
  t: string;
  cb?: (() => void) | null;
}

// ===== BGM =====

export interface BgmTrack {
  bpm: number;
  notes: number[][];
}

export type BgmTracks = Record<string, BgmTrack>;
export type NoteMap = Record<string, number>;

// ===== Game State Enum =====

export const GS = {
  TITLE: 0,
  EXPLORE: 1,
  BATTLE: 2,
  MENU: 3,
  DIALOG: 4,
  SHOP: 5,
  GAMEOVER: 6,
  ENDING: 7,
} as const;

export type GameStateEnum = (typeof GS)[keyof typeof GS];

// ===== Camera =====

export interface CameraState {
  x: number;
  y: number;
}

// ===== The master G (GameState) object =====

export interface GameState {
  state: GameStateEnum;

  /** Currently held keys (true while held). */
  keys: Record<string, boolean>;
  /** Key-pressed flags (true on frame of press, consumed by kp()). */
  kp: Record<string, boolean>;

  hero: CharaLike | null;
  prince: CharaLike | null;
  princess: CharaLike | null;
  party: CharaLike[];
  wagon: CharaLike[];

  mapId: string;
  px: number;
  py: number;
  /** Player direction: 0=down, 1=up, 2=left, 3=right. */
  pdir: number;
  moveTimer: number;
  cam: CameraState;

  steps: number;
  gold: number;
  items: InventoryItem[];
  flags: Record<string, boolean>;

  hasShip: boolean;
  shipX: number;
  shipY: number;
  onShip: boolean;

  visited: string[];

  /** Message queue. */
  msgQ: MsgQueueEntry[];
  /** Current message text being displayed. */
  msgT: string;
  /** Callback after current message is dismissed. */
  msgCb: (() => void) | null;
  /** Character index for typewriter effect. */
  msgCI?: number;

  /** Menu state (when state === GS.MENU). */
  ms: MenuState | null;
  /** Battle state (when state === GS.BATTLE). */
  bs: BattleState | null;
  /** Shop state (when state === GS.SHOP). */
  ss: ShopState | null;

  /** Animation frame counter. */
  frame: number;

  /** Indoor / dungeon maps keyed by map ID. */
  maps: Record<string, MapData>;
  /** Warp definitions keyed by "mapId_x_y". */
  warps: Record<string, WarpData>;
  /** NPC lists keyed by map ID. */
  npcs: Record<string, NpcData[]>;
  /** Shop inventories keyed by map ID. */
  shops: Record<string, ShopData>;
  /** Chest rewards keyed by "mapId_x_y". */
  chests: Record<string, ChestReward>;

  /** Inn cost per party member. */
  innPrice: number;

  /** Zukan (monster/item encyclopedia). */
  zukan?: ZukanData;

  /** Game-over phase tracking. */
  goPhase?: string;
  goJumon?: string;
  goCopied?: boolean;
}

// ===== Recruitment =====

export type RecruitTrigger = "boss_defeat" | "npc_talk" | "story_milestone";

export interface RecruitmentEvent {
  charId: number;
  charName: string;
  trigger: RecruitTrigger;
  condition: string;
  description: string;
}
