import type { ItemData } from '../types';

export const ITEMS: ItemData[] = [
  { id: 0,  name: 'やくそう',       type: 'heal',   power: 30,           price: 8 },
  { id: 1,  name: 'どくけしそう',   type: 'cure',   cure: 'poison',      price: 10 },
  { id: 2,  name: 'キメラのつばさ', type: 'field',  effect: 'ruura',     price: 25 },
  { id: 3,  name: 'せかいじゅのは', type: 'revive', power: 999,          price: 0 },
  { id: 4,  name: 'ぎんのカギ',     type: 'key',                         price: 0 },
  { id: 5,  name: 'きんのカギ',     type: 'key',                         price: 0 },
  { id: 6,  name: 'ろうやのカギ',   type: 'key',                         price: 0 },
  { id: 7,  name: 'ふねのきっぷ',   type: 'key',                         price: 0 },
  { id: 8,  name: 'ラーのかがみ',   type: 'story',                       price: 0 },
  { id: 9,  name: 'つきのかけら',   type: 'story',                       price: 0 },
  { id: 10, name: 'いのちのきのみ', type: 'stat',   stat: 'maxHp', value: 5, price: 0 },
  { id: 11, name: 'ふしぎなきのみ', type: 'stat',   stat: 'maxMp', value: 5, price: 0 },
];
