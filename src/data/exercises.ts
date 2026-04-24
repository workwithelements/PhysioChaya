import type { Exercise } from '../types'

export const EXERCISES: Exercise[] = [
  // Ankle
  {
    id: 'ex-ankle-calf-raise',
    name: 'Double-leg calf raise',
    target: 'ankle',
    description: 'Strengthens gastrocnemius and soleus; improves plantarflexion power and tendon load tolerance.',
    steps: [
      'Stand with feet hip-width apart, holding a rail for balance if needed.',
      'Slowly rise onto the balls of both feet over 2 seconds.',
      'Pause for 1 second at the top.',
      'Lower over 3 seconds, feeling an eccentric load through the calf.',
      '3 sets of 12–15 reps.',
    ],
  },
  {
    id: 'ex-ankle-alphabet',
    name: 'Ankle alphabet',
    target: 'ankle',
    description: 'Active range-of-motion drill for early rehab after sprain.',
    steps: [
      'Sit with the affected leg extended.',
      'Draw each letter of the alphabet in the air with the big toe.',
      'Move only at the ankle; keep the rest of the leg still.',
      '1–2 rounds once or twice a day.',
    ],
  },
  {
    id: 'ex-ankle-band-inversion',
    name: 'Resisted inversion/eversion',
    target: 'ankle',
    description: 'Targets tibialis posterior, peroneals; rebuilds mediolateral stability after sprain.',
    steps: [
      'Sit with a resistance band looped around the forefoot, anchored to the opposite side.',
      'Turn the foot inward (inversion) against the band — hold 2s.',
      'Return slowly. 2–3 sets of 12.',
      'Flip the anchor and repeat for eversion.',
    ],
  },

  // Knee
  {
    id: 'ex-knee-sit-to-stand',
    name: 'Sit-to-stand',
    target: 'knee',
    description: 'Functional quadriceps and glute loading; scales easily by chair height.',
    steps: [
      'Sit on a sturdy chair, feet flat, hip-width.',
      'Lean slightly forward and stand without using hands.',
      'Lower back down with control over 3 seconds.',
      '3 sets of 10–12.',
    ],
  },
  {
    id: 'ex-knee-terminal-ext',
    name: 'Terminal knee extension',
    target: 'knee',
    description: 'Targets VMO/quadriceps in the last 30° of extension — useful post-surgical or for anterior knee pain.',
    steps: [
      'Loop a resistance band around a fixed point at knee height, and around the back of the affected knee.',
      'Stand facing the anchor with a soft bend in the knee.',
      'Straighten the knee fully against the band, squeezing the quad.',
      'Control return. 3 sets of 12.',
    ],
  },
  {
    id: 'ex-knee-step-down',
    name: 'Forward step-down',
    target: 'knee',
    description: 'Eccentric quadriceps loading; exposes and corrects dynamic valgus.',
    steps: [
      'Stand on a low step with one foot, other foot hovering off the front edge.',
      'Slowly lower the hovering foot toward the floor over 3 seconds.',
      'Keep the standing knee tracking over the middle toes (no collapsing in).',
      'Tap the heel lightly and return. 3 sets of 8–10 each side.',
    ],
  },

  // Hip
  {
    id: 'ex-hip-bridge',
    name: 'Glute bridge',
    target: 'hip',
    description: 'Gluteus maximus activation and posterior chain strengthening.',
    steps: [
      'Lie supine with knees bent, feet flat, hip-width apart.',
      'Drive through heels to lift hips until shoulders-knees form a straight line.',
      'Squeeze glutes at the top for 2s.',
      'Lower with control. 3 sets of 12–15.',
    ],
  },
  {
    id: 'ex-hip-clam',
    name: 'Clamshell',
    target: 'hip',
    description: 'Isolates gluteus medius; improves frontal-plane pelvic control.',
    steps: [
      'Lie on your side with knees bent ~45°, heels together.',
      'Keeping heels touching, rotate the top knee up without tipping the pelvis backward.',
      'Pause 2s, lower slowly.',
      '3 sets of 12 each side. Add a band above the knees to progress.',
    ],
  },
  {
    id: 'ex-hip-hinge',
    name: 'Hip hinge pattern',
    target: 'hip',
    description: 'Teaches load through the hip rather than the lumbar spine; foundation for deadlifts.',
    steps: [
      'Stand with feet hip-width, soft knees.',
      'Push hips back as if closing a car door with your backside.',
      'Maintain a neutral spine, feel a hamstring stretch.',
      'Drive through heels to stand tall. 3 sets of 10.',
    ],
  },

  // Shoulder
  {
    id: 'ex-shldr-ER-band',
    name: 'Resisted external rotation',
    target: 'shoulder',
    description: 'Infraspinatus/teres minor strengthening — a rotator cuff staple.',
    steps: [
      'Stand side-on to a band anchored at elbow height.',
      'Tuck a towel under the working elbow; keep it pinned to your side.',
      'Rotate the forearm outward against the band, keeping the elbow at 90°.',
      'Return slowly. 3 sets of 12–15.',
    ],
  },
  {
    id: 'ex-shldr-scap-retract',
    name: 'Scapular retraction (Ys, Ts, Ws)',
    target: 'shoulder',
    description: 'Targets lower and middle trapezius, rhomboids; rebalances the scapulothoracic joint.',
    steps: [
      'Lie prone on a bench or floor, arms hanging down.',
      'Lift arms into a Y shape, then a T, then a W — holding each for 2s.',
      'Keep neck long, avoid shrugging.',
      '3 rounds of 8 of each letter.',
    ],
  },
  {
    id: 'ex-shldr-wall-slide',
    name: 'Wall slides',
    target: 'shoulder',
    description: 'Grooves overhead mobility with scapular upward rotation.',
    steps: [
      'Stand with back, elbows and wrists against a wall.',
      'Slide arms overhead, keeping contact with the wall.',
      'Stop at the point you lose contact; reverse.',
      '3 sets of 10.',
    ],
  },

  // Elbow
  {
    id: 'ex-elbow-tyler-twist',
    name: 'Tyler twist (FlexBar)',
    target: 'elbow',
    description: 'Eccentric wrist extensor loading for lateral epicondylalgia.',
    steps: [
      'Hold a flexible resistance bar vertically, affected hand at the top with wrist extended.',
      'Grip the bottom with the other hand and twist both hands to wring the bar.',
      'Bring arms out in front with both elbows extended.',
      'Slowly untwist by letting the affected wrist flex over ~4s.',
      '3 sets of 15.',
    ],
  },
  {
    id: 'ex-elbow-wrist-flex',
    name: 'Resisted wrist flexion/extension',
    target: 'elbow',
    description: 'General forearm strengthening; can bias either epicondyle.',
    steps: [
      'Rest forearm on a bench with the wrist free over the edge, palm up (for flexors).',
      'Hold a light dumbbell. Curl the wrist upward, lower slowly.',
      '3 sets of 15. Flip palm-down for extensor bias.',
    ],
  },
  {
    id: 'ex-elbow-pronation',
    name: 'Pronation/supination with hammer',
    target: 'elbow',
    description: 'Loads pronators and supinators; useful post-immobilisation.',
    steps: [
      'Sit with forearm on thigh, hand off the edge, holding a light hammer near the head.',
      'Rotate the wrist to turn the hammer left and right.',
      'Control both directions. 3 sets of 12.',
    ],
  },

  // Wrist
  {
    id: 'ex-wrist-tendon-glide',
    name: 'Tendon glides',
    target: 'wrist',
    description: 'Mobilises flexor tendons through their full excursion; core early carpal tunnel rehab.',
    steps: [
      'Start with fingers straight.',
      'Move through: hook fist → straight fist → full fist → tabletop → straight.',
      'Hold each position 2s.',
      '2–3 rounds, 10 reps.',
    ],
  },
  {
    id: 'ex-wrist-grip',
    name: 'Grip squeezes',
    target: 'wrist',
    description: 'Intrinsic and extrinsic flexor strengthening; bread-and-butter general wrist rehab.',
    steps: [
      'Hold a soft ball or putty in the palm.',
      'Squeeze firmly for 3s, release for 1s.',
      '3 sets of 12–15.',
    ],
  },
  {
    id: 'ex-wrist-radial-dev',
    name: 'Radial/ulnar deviation',
    target: 'wrist',
    description: 'Targets wrist deviators often involved in De Quervain\'s and ulnar-sided pain.',
    steps: [
      'Rest forearm on a bench, thumb up, hand off the edge.',
      'Hold a light weight; lift the hand up (radial) and down (ulnar).',
      'Small, controlled arcs. 3 sets of 12.',
    ],
  },
]

export const exerciseById = (id: string) => EXERCISES.find((e) => e.id === id)
