import { create } from 'zustand'
import type { GusMood, JointId } from './types'

interface AppState {
  selectedJoint: JointId | null
  gusMood: GusMood
  gusLine: string
  setSelectedJoint: (id: JointId | null) => void
  setGus: (mood: GusMood, line: string) => void
}

export const useApp = create<AppState>((set) => ({
  selectedJoint: null,
  gusMood: 'idle',
  gusLine: "Hi, I'm Gus! Let's learn some physio together.",
  setSelectedJoint: (id) => set({ selectedJoint: id }),
  setGus: (gusMood, gusLine) => set({ gusMood, gusLine }),
}))
