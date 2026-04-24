export const GUS_LINES = {
  welcome: [
    "Hi, I'm Gus! Let's learn some physio together.",
    "Purr-fect — pick a mode and we'll get stuck in.",
  ],
  explorePrompt: [
    'Click a glowing marker to learn about that joint.',
    'Drag to rotate, scroll to zoom. Click a joint for details.',
  ],
  jointSelected: [
    "Nice pick! Here's what you should know.",
    'Good choice — the anatomy, common injuries, and exercises are all here.',
  ],
  quizStart: [
    'Five questions, pick the best answer. No pressure, just learning.',
    "Let's see what's stuck! I'll cheer you on either way.",
  ],
  correct: ["Purr-fect!", 'Spot on.', 'Nailed it!'],
  wrong: [
    "Not quite — let me walk you through it.",
    'Close! Here\'s the reasoning.',
  ],
  caseStart: [
    "Read the history and findings carefully. What's the most likely pathology?",
  ],
  pathologyCorrect: ["Yes — now let's pick three assessments that fit."],
  pathologyWrong: [
    "Hmm, I'd go a different direction. We'll still work through the rest together and review at the end.",
  ],
  pickAssessments: ['Pick THREE assessments to confirm or rule things out.'],
  pickManualTherapy: ['Now choose ONE manual therapy technique.'],
  pickSoftTissue: ['And finally, ONE soft tissue technique.'],
  reviewReady: ["All done! Let's review your choices."],
}

export const randLine = (pool: readonly string[]) => pool[Math.floor(Math.random() * pool.length)]
