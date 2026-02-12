import type { NoteMap, BgmTracks } from '../types';

// ============================================================
// NOTE frequencies (Hz)
// ============================================================
export const NOTE: NoteMap = {
  C3: 131, D3: 147, E3: 165, F3: 175, G3: 196,
  A3: 220, B3: 247,
  C4: 262, D4: 294, E4: 330, F4: 349, G4: 392,
  A4: 440, B4: 494,
  C5: 523, D5: 587, E5: 659, F5: 698, G5: 784,
  A5: 880, B5: 988,
  C6: 1047,
  R: 0,
};

// ============================================================
// BGM Track Definitions
// ============================================================
export const BGM_TRACKS: BgmTracks = {
  title: {
    bpm: 140,
    notes: [[
      NOTE.E4, NOTE.E4, NOTE.F4, NOTE.G4, NOTE.G4, NOTE.F4, NOTE.E4, NOTE.D4,
      NOTE.C4, NOTE.C4, NOTE.D4, NOTE.E4, NOTE.E4, NOTE.D4, NOTE.D4, NOTE.R,
      NOTE.E4, NOTE.E4, NOTE.F4, NOTE.G4, NOTE.G4, NOTE.F4, NOTE.E4, NOTE.D4,
      NOTE.C4, NOTE.C4, NOTE.D4, NOTE.E4, NOTE.D4, NOTE.C4, NOTE.C4, NOTE.R,
    ]],
  },
  field: {
    bpm: 100,
    notes: [[
      NOTE.C4, NOTE.E4, NOTE.G4, NOTE.E4, NOTE.F4, NOTE.A4, NOTE.G4, NOTE.E4,
      NOTE.D4, NOTE.F4, NOTE.E4, NOTE.C4, NOTE.D4, NOTE.E4, NOTE.C4, NOTE.R,
      NOTE.G4, NOTE.E4, NOTE.C4, NOTE.D4, NOTE.E4, NOTE.G4, NOTE.A4, NOTE.G4,
      NOTE.F4, NOTE.E4, NOTE.D4, NOTE.C4, NOTE.D4, NOTE.C4, NOTE.C4, NOTE.R,
    ]],
  },
  battle: {
    bpm: 180,
    notes: [[
      NOTE.E4, NOTE.E4, NOTE.R,  NOTE.E4, NOTE.R,  NOTE.C4, NOTE.E4, NOTE.R,
      NOTE.G4, NOTE.R,  NOTE.R,  NOTE.R,  NOTE.G3, NOTE.R,  NOTE.R,  NOTE.R,
      NOTE.C4, NOTE.R,  NOTE.R,  NOTE.G3, NOTE.R,  NOTE.R,  NOTE.E3, NOTE.R,
      NOTE.A3, NOTE.R,  NOTE.B3, NOTE.R,  NOTE.A3, NOTE.G3, NOTE.E4, NOTE.G4,
    ]],
  },
  town: {
    bpm: 90,
    notes: [[
      NOTE.G4, NOTE.A4, NOTE.B4, NOTE.G4, NOTE.A4, NOTE.B4, NOTE.C5, NOTE.B4,
      NOTE.A4, NOTE.G4, NOTE.F4, NOTE.E4, NOTE.D4, NOTE.E4, NOTE.F4, NOTE.G4,
      NOTE.E4, NOTE.F4, NOTE.G4, NOTE.E4, NOTE.F4, NOTE.G4, NOTE.A4, NOTE.G4,
      NOTE.F4, NOTE.E4, NOTE.D4, NOTE.C4, NOTE.D4, NOTE.E4, NOTE.C4, NOTE.R,
    ]],
  },
  dungeon: {
    bpm: 80,
    notes: [[
      NOTE.C3, NOTE.D3, NOTE.E3, NOTE.C3, NOTE.D3, NOTE.E3, NOTE.F3, NOTE.E3,
      NOTE.D3, NOTE.C3, NOTE.B3, NOTE.A3, NOTE.G3, NOTE.A3, NOTE.B3, NOTE.C4,
      NOTE.A3, NOTE.B3, NOTE.C4, NOTE.A3, NOTE.G3, NOTE.F3, NOTE.E3, NOTE.F3,
      NOTE.G3, NOTE.A3, NOTE.G3, NOTE.F3, NOTE.E3, NOTE.D3, NOTE.C3, NOTE.R,
    ]],
  },
  boss: {
    bpm: 160,
    notes: [[
      NOTE.E3, NOTE.E3, NOTE.E3, NOTE.R,  NOTE.C3, NOTE.E3, NOTE.G3, NOTE.R,
      NOTE.A3, NOTE.A3, NOTE.A3, NOTE.R,  NOTE.G3, NOTE.F3, NOTE.E3, NOTE.R,
      NOTE.E3, NOTE.G3, NOTE.B3, NOTE.R,  NOTE.C4, NOTE.B3, NOTE.A3, NOTE.G3,
      NOTE.F3, NOTE.E3, NOTE.D3, NOTE.E3, NOTE.F3, NOTE.G3, NOTE.E3, NOTE.R,
    ]],
  },
};
