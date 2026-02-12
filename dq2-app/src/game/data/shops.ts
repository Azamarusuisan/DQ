import type { ShopData } from '../types';

export const SHOPS: Record<string, ShopData> = {
  liriza: {
    items:   [{ id: 0, p: 8 }, { id: 1, p: 10 }, { id: 2, p: 25 }],
    weapons: [{ id: 0, p: 10 }, { id: 1, p: 100 }, { id: 9, p: 250 }],
    armors:  [{ id: 0, p: 30 }, { id: 1, p: 80 }],
    shields: [{ id: 0, p: 60 }],
    helmets: [{ id: 0, p: 40 }],
  },
  moonpeta: {
    items:   [{ id: 0, p: 8 }, { id: 1, p: 10 }, { id: 2, p: 25 }],
    weapons: [{ id: 2, p: 500 }, { id: 7, p: 200 }, { id: 15, p: 150 }, { id: 10, p: 1200 }],
    armors:  [{ id: 2, p: 300 }, { id: 13, p: 800 }],
    shields: [{ id: 1, p: 250 }],
    helmets: [{ id: 0, p: 40 }, { id: 1, p: 200 }],
  },
  beranule: {
    items:   [{ id: 0, p: 8 }, { id: 1, p: 10 }, { id: 2, p: 25 }],
    weapons: [{ id: 2, p: 500 }, { id: 6, p: 300 }, { id: 23, p: 1500 }, { id: 16, p: 1800 }],
    armors:  [{ id: 3, p: 700 }, { id: 6, p: 1500 }],
    shields: [{ id: 4, p: 500 }, { id: 8, p: 800 }],
    helmets: [{ id: 1, p: 200 }, { id: 3, p: 400 }],
  },
  perpoi: {
    items:   [{ id: 0, p: 8 }, { id: 1, p: 10 }, { id: 2, p: 25 }],
    weapons: [{ id: 4, p: 3500 }, { id: 11, p: 4200 }, { id: 21, p: 2800 }],
    armors:  [{ id: 4, p: 3000 }, { id: 7, p: 2500 }],
    shields: [{ id: 5, p: 1200 }],
    helmets: [{ id: 5, p: 800 }, { id: 7, p: 600 }],
  },
};
