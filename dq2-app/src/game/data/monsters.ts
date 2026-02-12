import type { MonsterData } from '../types';

export const MONSTERS: MonsterData[] = [
  // ---------------------------------------------------------------
  // Zone 0: ローレシア周辺
  // ---------------------------------------------------------------
  {
    name: 'スライム', hp: 8, mp: 0, atk: 6, def: 3, agi: 3,
    exp: 2, gold: 2, spells: [], zone: [0],
    drop: { type: 'item', id: 0, rate: 0.25 },
  },
  {
    name: 'おおなめくじ', hp: 14, mp: 0, atk: 10, def: 4, agi: 2,
    exp: 4, gold: 4, spells: [], zone: [0],
    drop: { type: 'item', id: 1, rate: 0.125 },
  },
  {
    name: 'アイアンアント', hp: 16, mp: 0, atk: 12, def: 6, agi: 4,
    exp: 5, gold: 5, spells: [], zone: [0],
    drop: { type: 'item', id: 0, rate: 0.125 },
  },

  // ---------------------------------------------------------------
  // Zone 0-1: ローレシア～サマルトリア
  // ---------------------------------------------------------------
  {
    name: 'ドラキー', hp: 12, mp: 0, atk: 9, def: 5, agi: 6,
    exp: 3, gold: 3, spells: [], zone: [0, 1],
    drop: { type: 'item', id: 2, rate: 0.0625 },
  },

  // ---------------------------------------------------------------
  // Zone 1: サマルトリア～ムーンペタ
  // ---------------------------------------------------------------
  {
    name: 'バブルスライム', hp: 18, mp: 0, atk: 14, def: 6, agi: 4,
    exp: 6, gold: 6, spells: [], zone: [1],
    drop: { type: 'item', id: 1, rate: 0.125 },
  },
  {
    name: 'マンドリル', hp: 28, mp: 0, atk: 18, def: 10, agi: 8,
    exp: 10, gold: 12, spells: [], zone: [1],
    drop: { type: 'weapon', id: 9, rate: 0.03 },
  },
  {
    name: 'リビングデッド', hp: 25, mp: 0, atk: 19, def: 10, agi: 5,
    exp: 10, gold: 14, spells: [], zone: [1],
    drop: { type: 'armor', id: 1, rate: 0.0625 },
  },
  {
    name: 'まじゅつし', hp: 25, mp: 10, atk: 16, def: 10, agi: 14,
    exp: 12, gold: 16, spells: ['gira'], zone: [1],
    drop: { type: 'item', id: 2, rate: 0.125 },
  },

  // ---------------------------------------------------------------
  // Zone 2: ロンダルキアへの洞窟
  // ---------------------------------------------------------------
  {
    name: 'バピラス', hp: 40, mp: 8, atk: 32, def: 20, agi: 14,
    exp: 18, gold: 22, spells: ['rariho'], zone: [2],
    drop: { type: 'weapon', id: 15, rate: 0.03 },
  },
  {
    name: 'ドラゴン', hp: 60, mp: 0, atk: 38, def: 30, agi: 14,
    exp: 30, gold: 40, spells: ['gira'], zone: [2],
    drop: { type: 'shield', id: 5, rate: 0.03 },
  },
  {
    name: 'キラーマシン', hp: 100, mp: 0, atk: 50, def: 60, agi: 25,
    exp: 65, gold: 50, spells: [], zone: [2, 3],
    drop: { type: 'weapon', id: 10, rate: 0.03 },
  },
  {
    name: 'フレイム', hp: 50, mp: 8, atk: 38, def: 25, agi: 20,
    exp: 25, gold: 30, spells: ['gira'], zone: [2],
    drop: { type: 'armor', id: 6, rate: 0.03 },
  },
  {
    name: 'はぐれメタル', hp: 5, mp: 99, atk: 10, def: 250, agi: 200,
    exp: 1050, gold: 10, spells: [], zone: [2, 3], flee: 0.5,
    drop: { type: 'helmet', id: 7, rate: 0.1 },
  },

  // ---------------------------------------------------------------
  // Zone 3: ハーゴン神殿
  // ---------------------------------------------------------------
  {
    name: 'ギガンテス', hp: 100, mp: 0, atk: 65, def: 45, agi: 12,
    exp: 55, gold: 60, spells: [], zone: [3],
    drop: { type: 'weapon', id: 20, rate: 0.03 },
  },
  {
    name: 'アークデーモン', hp: 80, mp: 20, atk: 55, def: 35, agi: 20,
    exp: 50, gold: 60, spells: ['begirama'], zone: [3],
    drop: { type: 'armor', id: 7, rate: 0.03 },
  },
  {
    name: 'ブリザード', hp: 60, mp: 20, atk: 40, def: 30, agi: 35,
    exp: 45, gold: 50, spells: ['ionazun'], zone: [3],
    drop: { type: 'weapon', id: 18, rate: 0.03 },
  },
  {
    name: 'あくましんかん', hp: 90, mp: 30, atk: 45, def: 40, agi: 22,
    exp: 55, gold: 55, spells: ['behoimi'], zone: [3],
    drop: { type: 'item', id: 3, rate: 0.0625 },
  },

  // ---------------------------------------------------------------
  // ボス
  // ---------------------------------------------------------------
  {
    name: 'ハーゴン', hp: 200, mp: 50, atk: 80, def: 60, agi: 40,
    exp: 0, gold: 0, spells: ['begirama', 'behoimi'], zone: [], boss: true,
  },
  {
    name: 'シドー', hp: 300, mp: 99, atk: 120, def: 80, agi: 50,
    exp: 0, gold: 0, spells: ['ionazun', 'behoimi'], zone: [], boss: true,
  },

  // ---------------------------------------------------------------
  // Zone 4: 隠しダンジョン（裏ダン）
  // ---------------------------------------------------------------
  {
    name: 'キングスライム', hp: 200, mp: 30, atk: 80, def: 60, agi: 40,
    exp: 120, gold: 100, spells: ['behoimi'], zone: [4],
    drop: { type: 'item', id: 3, rate: 0.1 },
  },
  {
    name: 'デスピサロ', hp: 400, mp: 60, atk: 130, def: 90, agi: 55,
    exp: 200, gold: 150, spells: ['begirama', 'ionazun'], zone: [4],
    drop: { type: 'armor', id: 12, rate: 0.02 },
  },
  {
    name: 'ミルドラース', hp: 500, mp: 80, atk: 150, def: 100, agi: 60,
    exp: 250, gold: 200, spells: ['ionazun', 'behoimi'], zone: [4],
    drop: { type: 'weapon', id: 14, rate: 0.02 },
  },
  {
    name: 'デスタムーア', hp: 600, mp: 70, atk: 160, def: 110, agi: 65,
    exp: 300, gold: 200, spells: ['ionazun', 'begirama'], zone: [4],
    drop: { type: 'shield', id: 6, rate: 0.02 },
  },
  {
    name: 'メタルキング', hp: 10, mp: 99, atk: 20, def: 500, agi: 255,
    exp: 3050, gold: 20, spells: [], zone: [4], flee: 0.6,
    drop: { type: 'shield', id: 7, rate: 0.05 },
  },

  // ---------------------------------------------------------------
  // 裏ボス
  // ---------------------------------------------------------------
  {
    name: 'ゾーマ', hp: 1500, mp: 99, atk: 200, def: 150, agi: 80,
    exp: 5000, gold: 0, spells: ['ionazun', 'behoimi'], zone: [], boss: true,
  },
  {
    name: 'エスターク', hp: 2000, mp: 99, atk: 250, def: 180, agi: 90,
    exp: 8000, gold: 0, spells: ['ionazun', 'begirama'], zone: [], boss: true,
  },
  {
    name: 'ダークドレアム', hp: 3000, mp: 99, atk: 350, def: 250, agi: 120,
    exp: 15000, gold: 0, spells: ['ionazun', 'begirama', 'behoimi'], zone: [], boss: true,
  },

  // ---------------------------------------------------------------
  // 新ミニボス
  // ---------------------------------------------------------------
  {
    name: 'ドラゴン', hp: 100, mp: 0, atk: 45, def: 35, agi: 20,
    exp: 80, gold: 100, spells: [], zone: [], boss: true,
  },
  {
    name: 'アームライオン', hp: 150, mp: 0, atk: 60, def: 45, agi: 30,
    exp: 120, gold: 150, spells: [], zone: [], boss: true,
  },
  {
    name: 'キラーマジンガ', hp: 200, mp: 0, atk: 80, def: 60, agi: 35,
    exp: 200, gold: 200, spells: [], zone: [], boss: true,
  },
];
