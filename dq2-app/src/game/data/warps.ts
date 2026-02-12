import type { WarpData } from '../types';

export const WARPS: Record<string, WarpData> = {
  // ローレシア城
  'world_12_14':    { map: 'loracia',         x: 8,  y: 14 },
  'loracia_8_15':   { map: 'world',           x: 12, y: 15 },

  // リリザ
  'world_22_28':    { map: 'liriza',          x: 6,  y: 10 },
  'liriza_6_11':    { map: 'world',           x: 22, y: 29 },

  // ムーンペタ
  'world_28_42':    { map: 'moonpeta',        x: 7,  y: 12 },
  'moonpeta_7_13':  { map: 'world',           x: 28, y: 43 },

  // ベラヌール
  'world_42_18':    { map: 'beranule',        x: 6,  y: 10 },
  'beranule_6_11':  { map: 'world',           x: 42, y: 19 },

  // サマルトリア城
  'world_16_40':    { map: 'samaltria',       x: 7,  y: 12 },
  'samaltria_7_13': { map: 'world',           x: 16, y: 41 },

  // ペルポイ
  'world_48_35':    { map: 'perpoi',          x: 6,  y: 10 },
  'perpoi_6_11':    { map: 'world',           x: 48, y: 36 },

  // 湖の洞窟
  'world_20_22':    { map: 'lake_cave',       x: 8,  y: 1 },
  'lake_cave_8_0':  { map: 'world',           x: 20, y: 21 },

  // ロンの洞窟
  'world_45_28':    { map: 'ron_cave',        x: 10, y: 1 },
  'ron_cave_10_0':  { map: 'world',           x: 45, y: 27 },

  // ドラゴンの角
  'world_40_40':    { map: 'dragon_horn',     x: 7,  y: 1 },
  'dragon_horn_7_0':{ map: 'world',           x: 40, y: 39 },

  // ハーゴン神殿
  'world_55_50':    { map: 'hargon',          x: 8,  y: 14 },
  'hargon_8_15':    { map: 'world',           x: 55, y: 51 },

  // ロンダルキアのほこら
  'world_38_10':    { map: 'rhone',           x: 7,  y: 12 },
  'rhone_7_13':     { map: 'world',           x: 38, y: 11 },

  // ダーマ神殿
  'world_30_20':    { map: 'dharma',          x: 6,  y: 10 },
  'dharma_6_11':    { map: 'world',           x: 30, y: 21 },

  // 隠しダンジョン
  'world_50_8':          { map: 'hidden_dungeon', x: 12, y: 1 },
  'hidden_dungeon_12_0': { map: 'world',          x: 50, y: 7 },
};
