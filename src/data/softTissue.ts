import type { Technique } from '../types'

export const SOFT_TISSUE: Technique[] = [
  {
    id: 'stt-effleurage',
    name: 'Effleurage',
    category: 'softTissue',
    targets: ['shoulder', 'elbow', 'hip', 'knee', 'ankle', 'wrist'],
    description: 'Long, gliding strokes with moderate pressure; a warm-up and venous return technique.',
    howTo: [
      'Apply a small amount of medium.',
      'Use broad contact (palms or forearm) and stroke distal-to-proximal along muscle fibres.',
      '3–5 minutes as a prelude to deeper work.',
    ],
    indications: ['Warm-up', 'General circulatory/relaxation effect'],
  },
  {
    id: 'stt-petrissage',
    name: 'Petrissage (kneading)',
    category: 'softTissue',
    targets: ['shoulder', 'hip', 'knee'],
    description: 'Rhythmic compression and lifting of tissue to mobilise fluid and mobilise between layers.',
    howTo: [
      'Use alternating hands to lift, squeeze and release muscle bellies.',
      'Work slowly along the length of the muscle.',
    ],
    indications: ['Muscle soreness', 'General tightness'],
  },
  {
    id: 'stt-trigger-point',
    name: 'Trigger point release',
    category: 'softTissue',
    targets: ['shoulder', 'hip', 'knee'],
    description: 'Sustained pressure on a hyperirritable nodule until referral eases.',
    howTo: [
      'Locate taut band and tender nodule.',
      'Apply thumb or elbow pressure at 6–7/10 tolerable intensity.',
      'Hold 60–90 seconds until referred sensation fades.',
    ],
    indications: ['Myofascial pain with trigger points'],
    contraindications: ['Acute inflammation over the site'],
  },
  {
    id: 'stt-cross-friction',
    name: 'Transverse (Cyriax) friction',
    category: 'softTissue',
    targets: ['elbow', 'wrist', 'ankle', 'knee'],
    description: 'Deep transverse friction across the fibres of a tendon or ligament to stimulate remodelling.',
    howTo: [
      'Place the tissue in a slightly lengthened position.',
      'Use a fingertip or knuckle across the fibres with enough depth to engage the target tissue.',
      'Continue for 5–10 minutes at tolerated intensity.',
    ],
    indications: ['Chronic tendinopathy', 'Chronic ligament sprain'],
    contraindications: ['Acute tears', 'Bursitis', 'Suspected infection'],
  },
  {
    id: 'stt-myofascial-release',
    name: 'Myofascial release',
    category: 'softTissue',
    targets: ['shoulder', 'hip', 'knee', 'ankle'],
    description: 'Sustained low-load stretch of restricted fascial layers.',
    howTo: [
      'Engage the tissue at its barrier without gliding.',
      'Wait 90–120 seconds for a release, then follow the tissue into the new range.',
    ],
    indications: ['Fascial restriction', 'Post-immobilisation stiffness'],
  },
  {
    id: 'stt-soft-tissue-release',
    name: 'Active soft tissue release',
    category: 'softTissue',
    targets: ['shoulder', 'hip', 'knee', 'ankle', 'elbow'],
    description: 'Pin-and-stretch: fix a muscle in shortened position, then lengthen actively or passively under the lock.',
    howTo: [
      'Place the muscle in a shortened position and apply a fixed point with thumb or elbow.',
      'Ask the patient to take the muscle into its lengthened position slowly.',
      'Repeat along the muscle length 3–5 times.',
    ],
    indications: ['Adhesions', 'Tight muscle groups'],
  },
  {
    id: 'stt-stretching',
    name: 'Post-isometric stretching (PIR)',
    category: 'softTissue',
    targets: ['shoulder', 'hip', 'knee', 'ankle', 'elbow'],
    description: 'Muscle energy technique: isometric contraction followed by a lengthening phase.',
    howTo: [
      'Bring the muscle to a comfortable end range.',
      'Resist a gentle 5–10s isometric contraction (~20% effort).',
      'On relaxation, ease into new range. Repeat 3–5 times.',
    ],
    indications: ['Reduced muscle length', 'Recurrent tightness'],
  },
  {
    id: 'stt-iastm',
    name: 'IASTM (instrument-assisted soft tissue mobilisation)',
    category: 'softTissue',
    targets: ['knee', 'ankle', 'elbow', 'wrist'],
    description: 'Use of a tool (e.g. Graston) to scan and treat areas of fibrosis or dysfunctional tissue.',
    howTo: [
      'Apply emollient to the skin.',
      'Sweep the tool at ~30–60° along and across fibres to identify restrictions.',
      'Treat identified areas for 30–60 seconds each.',
    ],
    indications: ['Chronic tendinopathy', 'Scar tissue'],
    contraindications: ['Open wounds', 'Anticoagulant therapy'],
  },
]

export const softTissueById = (id: string) => SOFT_TISSUE.find((s) => s.id === id)
