import type { JobData } from '../types';

export const JOBS: Record<string, JobData> = {
  none: {
    id: 0, name: 'なし',
    statMod: { str: 1, agi: 1, maxHp: 1, maxMp: 1 },
    skills: [],
    req: null,
  },
  warrior: {
    id: 1, name: '戦士',
    statMod: { str: 1.2, agi: 0.9, maxHp: 1.1, maxMp: 0.5 },
    skills: [[1, 'kiaitame'], [3, 'kabutowari'], [5, 'shinkuuha'], [8, 'morobagiri']],
    req: null,
  },
  mage: {
    id: 2, name: '魔法使い',
    statMod: { str: 0.7, agi: 1.0, maxHp: 0.8, maxMp: 1.3 },
    skills: [[1, 'mera'], [3, 'hyado'], [5, 'merami'], [8, 'mahyado']],
    req: null,
  },
  priest: {
    id: 3, name: '僧侶',
    statMod: { str: 0.9, agi: 1.0, maxHp: 1.0, maxMp: 1.2 },
    skills: [[1, 'hoimi'], [3, 'bagi'], [5, 'behoimi'], [8, 'zaoriku']],
    req: null,
  },
  fighter: {
    id: 4, name: '武闘家',
    statMod: { str: 1.1, agi: 1.3, maxHp: 1.0, maxMp: 0.3 },
    skills: [[1, 'mawashigeri'], [3, 'tobihizageri'], [5, 'seikenzuki'], [8, 'bakuretsken']],
    req: null,
  },
  dancer: {
    id: 5, name: '踊り子',
    statMod: { str: 0.8, agi: 1.2, maxHp: 0.9, maxMp: 1.0 },
    skills: [[1, 'fushiginaodori'], [3, 'sasouodori'], [5, 'medapanidance'], [8, 'hussle']],
    req: null,
  },
  thief: {
    id: 6, name: '盗賊',
    statMod: { str: 0.9, agi: 1.4, maxHp: 0.9, maxMp: 0.8 },
    skills: [[1, 'nusumu'], [3, 'touzokubashiri'], [5, 'inpas'], [8, 'remirama']],
    req: null,
  },
  battlemaster: {
    id: 7, name: 'バトルマスター',
    statMod: { str: 1.4, agi: 1.1, maxHp: 1.2, maxMp: 0.4 },
    skills: [[2, 'hayabusagiri'], [4, 'midareuchi'], [6, 'kyodaitsumuji'], [8, 'gigaslash']],
    req: { warrior: 8, fighter: 8 },
  },
  sage: {
    id: 8, name: '賢者',
    statMod: { str: 0.8, agi: 1.0, maxHp: 0.9, maxMp: 1.5 },
    skills: [[2, 'begiragon'], [4, 'mahyado2'], [6, 'behomaraa'], [8, 'madante']],
    req: { mage: 8, priest: 8 },
  },
  magicknight: {
    id: 9, name: '魔法戦士',
    statMod: { str: 1.1, agi: 1.0, maxHp: 1.0, maxMp: 1.1 },
    skills: [[2, 'flameslash'], [4, 'iceslash'], [6, 'mppassion'], [8, 'baikicrush']],
    req: { warrior: 8, mage: 8 },
  },
  paladin: {
    id: 10, name: 'パラディン',
    statMod: { str: 1.0, agi: 0.9, maxHp: 1.3, maxMp: 1.1 },
    skills: [[2, 'palashield'], [4, 'grandcross_s'], [6, 'megante'], [8, 'palaguard']],
    req: { priest: 8, fighter: 8 },
  },
  ranger: {
    id: 11, name: 'レンジャー',
    statMod: { str: 1.0, agi: 1.2, maxHp: 1.0, maxMp: 0.9 },
    skills: [[2, 'fieldguard'], [4, 'toxicbreath'], [6, 'mofusen'], [8, 'deathcutter']],
    req: { thief: 8, fighter: 8 },
  },
  superstar: {
    id: 12, name: 'スーパースター',
    statMod: { str: 0.9, agi: 1.1, maxHp: 0.9, maxMp: 1.2 },
    skills: [[2, 'starlight'], [4, 'grandbocce'], [6, 'hussledance2'], [8, 'moonlight']],
    req: { dancer: 8, mage: 8 },
  },
  hero_job: {
    id: 13, name: '勇者',
    statMod: { str: 1.3, agi: 1.2, maxHp: 1.3, maxMp: 1.3 },
    skills: [[2, 'gigaslash2'], [4, 'jigopark'], [6, 'grandcross'], [8, 'madante2']],
    req: { battlemaster: 8, sage: 8 },
  },
};

export const JOB_KEYS: string[] = Object.keys(JOBS);
