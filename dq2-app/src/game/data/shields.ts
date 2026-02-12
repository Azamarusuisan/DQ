import type { ShieldData } from '../types';

export const SHIELDS: ShieldData[] = [
  { id: 0, name: 'かわのたて',         def: 4,   price: 60,   who: [0, 1] },
  { id: 1, name: 'てつのたて',         def: 10,  price: 250,  who: [0, 1] },
  { id: 2, name: 'ちからのたて',       def: 18,  price: 0,    who: [0] },
  { id: 3, name: 'ロトのたて',         def: 30,  price: 0,    who: [0] },
  { id: 4, name: 'まほうのたて',       def: 14,  price: 500,  who: [0, 1] },
  { id: 5, name: 'ドラゴンシールド',   def: 22,  price: 1200, who: [0] },
  { id: 6, name: 'おうじゃのたて',     def: 35,  price: 0,    who: [0] },
  { id: 7, name: 'みかがみのたて',     def: 28,  price: 0,    who: [0, 1] },
  { id: 8, name: 'ふうじんのたて',     def: 20,  price: 800,  who: [0, 1] },
];
