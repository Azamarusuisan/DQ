import type { SpellData } from '../types';

export const SPELLS: Record<string, SpellData> = {
  // 基本呪文
  hoimi:        { name: 'ホイミ',         mp: 3,  type: 'heal',         power: 30,   target: 'ally' },
  behoimi:      { name: 'ベホイミ',       mp: 5,  type: 'heal',         power: 80,   target: 'ally' },
  gira:         { name: 'ギラ',           mp: 4,  type: 'damage',       power: 20,   target: 'enemies' },
  begirama:     { name: 'ベギラマ',       mp: 6,  type: 'damage',       power: 40,   target: 'enemies' },
  rariho:       { name: 'ラリホー',       mp: 3,  type: 'status',       effect: 'sleep', target: 'enemy' },
  manusa:       { name: 'マヌーサ',       mp: 3,  type: 'status',       effect: 'blind', target: 'enemies' },
  ruura:        { name: 'ルーラ',         mp: 8,  type: 'field' },
  riremito:     { name: 'リレミト',       mp: 6,  type: 'field' },
  zaoriku:      { name: 'ザオリク',       mp: 15, type: 'revive',       power: 999,  target: 'ally' },
  ionazun:      { name: 'イオナズン',     mp: 10, type: 'damage',       power: 70,   target: 'enemies' },
  sukuruto:     { name: 'スクルト',       mp: 4,  type: 'buff',         effect: 'def_up', target: 'allies' },
  baikiruto:    { name: 'バイキルト',     mp: 6,  type: 'buff',         effect: 'atk_up', target: 'ally' },

  // 戦士スキル
  kiaitame:     { name: 'きあいため',     mp: 0,  type: 'buff',         effect: 'atk_up', target: 'self' },
  kabutowari:   { name: 'かぶとわり',     mp: 0,  type: 'damage',       power: 30,   target: 'enemy', defDown: true },
  shinkuuha:    { name: 'しんくうは',     mp: 0,  type: 'damage',       power: 40,   target: 'enemies' },
  morobagiri:   { name: 'もろばぎり',     mp: 0,  type: 'damage',       power: 70,   target: 'enemy', selfDmg: 0.25 },

  // 魔法使いスキル
  mera:         { name: 'メラ',           mp: 2,  type: 'damage',       power: 15,   target: 'enemy' },
  hyado:        { name: 'ヒャド',         mp: 3,  type: 'damage',       power: 20,   target: 'enemy' },
  merami:       { name: 'メラミ',         mp: 5,  type: 'damage',       power: 45,   target: 'enemy' },
  mahyado:      { name: 'マヒャド',       mp: 8,  type: 'damage',       power: 50,   target: 'enemies' },

  // 僧侶スキル
  bagi:         { name: 'バギ',           mp: 4,  type: 'damage',       power: 18,   target: 'enemies' },

  // 武闘家スキル
  mawashigeri:  { name: 'まわしげり',     mp: 0,  type: 'damage',       power: 25,   target: 'enemy' },
  tobihizageri: { name: 'とびひざげり',   mp: 0,  type: 'damage',       power: 38,   target: 'enemy' },
  seikenzuki:   { name: 'せいけんづき',   mp: 0,  type: 'damage',       power: 55,   target: 'enemy', miss: 0.15 },
  bakuretsken:  { name: 'ばくれつけん',   mp: 0,  type: 'damage_multi', power: 15,   hits: 4, target: 'enemies' },

  // 踊り子スキル
  fushiginaodori:  { name: 'ふしぎなおどり',   mp: 0, type: 'drain_mp',  power: 8,  target: 'enemy' },
  sasouodori:      { name: 'さそうおどり',     mp: 0, type: 'status',    effect: 'sleep', target: 'enemy' },
  medapanidance:   { name: 'メダパニダンス',   mp: 0, type: 'status',    effect: 'confuse', target: 'enemies' },
  hussle:          { name: 'ハッスルダンス',   mp: 0, type: 'heal',      power: 40,  target: 'allies' },

  // 盗賊スキル
  nusumu:       { name: 'ぬすむ',         mp: 0,  type: 'steal',        target: 'enemy' },
  touzokubashiri: { name: 'とうぞくばしり', mp: 0, type: 'buff',       effect: 'agi_up', target: 'self' },
  inpas:        { name: 'インパス',       mp: 2,  type: 'identify',     target: 'enemy' },
  remirama:     { name: 'レミラーマ',     mp: 4,  type: 'field' },

  // バトルマスタースキル
  hayabusagiri: { name: 'はやぶさぎり',   mp: 0,  type: 'damage_multi', power: 25,   hits: 2, target: 'enemy' },
  midareuchi:   { name: 'みだれうち',     mp: 0,  type: 'damage_multi', power: 18,   hits: 4, target: 'enemies' },
  kyodaitsumuji:{ name: 'きょだいつむじ', mp: 0,  type: 'damage',       power: 65,   target: 'enemies' },
  gigaslash:    { name: 'ギガスラッシュ', mp: 15, type: 'damage',       power: 110,  target: 'enemies' },

  // 賢者スキル
  begiragon:    { name: 'ベギラゴン',     mp: 10, type: 'damage',       power: 85,   target: 'enemies' },
  behomaraa:    { name: 'ベホマラー',     mp: 12, type: 'heal',         power: 60,   target: 'allies' },
  mahyado2:     { name: 'マヒャデドス',   mp: 14, type: 'damage',       power: 90,   target: 'enemies' },
  madante:      { name: 'マダンテ',       mp: 0,  type: 'madante',      target: 'enemies' },

  // 魔法戦士スキル
  flameslash:   { name: 'かえんぎり',     mp: 2,  type: 'damage',       power: 40,   target: 'enemy' },
  iceslash:     { name: 'ふぶきのつるぎ', mp: 2,  type: 'damage',       power: 40,   target: 'enemy' },
  mppassion:    { name: 'MPパサー',       mp: 0,  type: 'mp_give',      target: 'ally' },
  baikicrush:   { name: 'バイキルト斬り', mp: 4,  type: 'damage',       power: 60,   target: 'enemy' },

  // パラディンスキル
  palashield:   { name: 'パラディンガード', mp: 0, type: 'buff',        effect: 'def_up', target: 'self' },
  grandcross_s: { name: 'グランドクロス', mp: 8,  type: 'damage',       power: 70,   target: 'enemies' },
  megante:      { name: 'メガンテ',       mp: 0,  type: 'megante',      target: 'enemies' },
  palaguard:    { name: 'におうだち',     mp: 0,  type: 'buff',         effect: 'cover', target: 'self' },

  // レンジャースキル
  fieldguard:   { name: 'フィールドガード', mp: 0, type: 'buff',        effect: 'def_up', target: 'allies' },
  toxicbreath:  { name: 'どくのいき',     mp: 0,  type: 'status',       effect: 'poison', target: 'enemies' },
  mofusen:      { name: 'もうどくのきり', mp: 0,  type: 'status',       effect: 'poison', target: 'enemies' },
  deathcutter:  { name: 'デスカッター',   mp: 0,  type: 'damage',       power: 75,   target: 'enemy' },

  // スーパースタースキル
  starlight:    { name: 'スターライト',   mp: 3,  type: 'heal',         power: 25,   target: 'allies' },
  grandbocce:   { name: 'グランドボッケ', mp: 0,  type: 'damage',       power: 45,   target: 'enemies' },
  hussledance2: { name: 'ハッスルダンス', mp: 0,  type: 'heal',         power: 60,   target: 'allies' },
  moonlight:    { name: 'ムーンサルト',   mp: 0,  type: 'damage',       power: 55,   target: 'enemies' },

  // 勇者スキル
  gigaslash2:   { name: 'ギガブレイク',   mp: 18, type: 'damage',       power: 130,  target: 'enemies' },
  jigopark:     { name: 'ジゴスパーク',   mp: 16, type: 'damage',       power: 100,  target: 'enemies' },
  grandcross:   { name: 'グランドクロス', mp: 12, type: 'damage',       power: 90,   target: 'enemies' },
  madante2:     { name: 'マダンテ',       mp: 0,  type: 'madante',      target: 'enemies' },
  behoma:       { name: 'ベホマ',         mp: 8,  type: 'heal',         power: 999,  target: 'ally' },
  gigadein:     { name: 'ギガデイン',     mp: 12, type: 'damage',       power: 85,   target: 'enemies' },
};
