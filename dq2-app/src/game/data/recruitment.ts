import type { RecruitmentEvent } from '../types';

/**
 * Recruitment events for the 17 legacy characters.
 * Each character can be recruited through one of three trigger types:
 * - boss_defeat: Character joins after defeating a specific boss
 * - npc_talk: Character joins by talking to a specific NPC
 * - story_milestone: Character joins upon reaching a story milestone
 */
export const RECRUITMENT_EVENTS: RecruitmentEvent[] = [
  // =================================================================
  // Boss Defeat (6 characters: ids 3, 4, 8, 10, 12, 13)
  // =================================================================
  {
    charId: 3,
    charName: 'ロトのゆうしゃ',
    trigger: 'boss_defeat',
    condition: 'hargonDown',
    description: 'ハーゴンを倒すとロトのゆうしゃが仲間になる',
  },
  {
    charId: 4,
    charName: 'アリーナ',
    trigger: 'boss_defeat',
    condition: 'dragonMiniBoss',
    description: 'ミニボス「ドラゴン」を倒すとアリーナが仲間になる',
  },
  {
    charId: 8,
    charName: 'テリー',
    trigger: 'boss_defeat',
    condition: 'armLionDown',
    description: 'ミニボス「アームライオン」を倒すとテリーが仲間になる',
  },
  {
    charId: 10,
    charName: 'エイト',
    trigger: 'boss_defeat',
    condition: 'killerMajingaDown',
    description: 'ミニボス「キラーマジンガ」を倒すとエイトが仲間になる',
  },
  {
    charId: 12,
    charName: 'カミュ',
    trigger: 'boss_defeat',
    condition: 'zomaDown',
    description: 'ゾーマを倒すとカミュが仲間になる',
  },
  {
    charId: 13,
    charName: 'イレブン',
    trigger: 'boss_defeat',
    condition: 'estarkDown',
    description: 'エスタークを倒すとイレブンが仲間になる',
  },

  // =================================================================
  // NPC Talk (6 characters: ids 5, 7, 9, 15, 18, 19)
  // =================================================================
  {
    charId: 5,
    charName: 'クリフト',
    trigger: 'npc_talk',
    condition: 'talk_liriza_clift',
    description: 'リリザの町でクリフトに話しかけると仲間になる',
  },
  {
    charId: 7,
    charName: 'フローラ',
    trigger: 'npc_talk',
    condition: 'talk_beranule_flora',
    description: 'ベラヌールでフローラに話しかけると仲間になる',
  },
  {
    charId: 9,
    charName: 'バーバラ',
    trigger: 'npc_talk',
    condition: 'talk_dharma_barbara',
    description: 'ダーマ神殿でバーバラに話しかけると仲間になる',
  },
  {
    charId: 15,
    charName: 'ミネア',
    trigger: 'npc_talk',
    condition: 'talk_moonpeta_minea',
    description: 'ムーンペタでミネアに話しかけると仲間になる',
  },
  {
    charId: 18,
    charName: 'ベロニカ',
    trigger: 'npc_talk',
    condition: 'talk_perpoi_veronica',
    description: 'ペルポイでベロニカに話しかけると仲間になる',
  },
  {
    charId: 19,
    charName: 'セーニャ',
    trigger: 'npc_talk',
    condition: 'talk_perpoi_senya',
    description: 'ペルポイでセーニャに話しかけると仲間になる',
  },

  // =================================================================
  // Story Milestone (5 characters: ids 6, 14, 16, 17, 11)
  // =================================================================
  {
    charId: 6,
    charName: 'ビアンカ',
    trigger: 'story_milestone',
    condition: 'princessJoined',
    description: '3人パーティが揃うとビアンカが仲間になる',
  },
  {
    charId: 14,
    charName: 'マーニャ',
    trigger: 'story_milestone',
    condition: 'hasShip',
    description: '船を入手するとマーニャが仲間になる',
  },
  {
    charId: 16,
    charName: 'ハッサン',
    trigger: 'story_milestone',
    condition: 'firstJobMastered',
    description: '最初の職業を極めるとハッサンが仲間になる',
  },
  {
    charId: 17,
    charName: 'ヤンガス',
    trigger: 'story_milestone',
    condition: 'sidoDown',
    description: 'シドーを倒すとヤンガスが仲間になる',
  },
  {
    charId: 11,
    charName: 'ゼシカ',
    trigger: 'story_milestone',
    condition: 'advancedJobUnlocked',
    description: '上級職に転職するとゼシカが仲間になる',
  },
];
