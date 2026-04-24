import type { Technique } from '../types'

export const ASSESSMENTS: Technique[] = [
  // Shoulder
  {
    id: 'as-neer',
    name: "Neer's impingement test",
    category: 'assessment',
    targets: ['shoulder'],
    description: 'Passive forced shoulder flexion with the scapula stabilised, compressing subacromial structures.',
    howTo: [
      'Stand behind the seated patient and stabilise the scapula with one hand.',
      'With the other hand, passively elevate the pronated arm into full flexion.',
      'Reproduction of anterolateral shoulder pain is a positive.',
    ],
    indications: ['Suspected subacromial impingement', 'Rotator cuff related shoulder pain'],
  },
  {
    id: 'as-hawkins',
    name: 'Hawkins–Kennedy test',
    category: 'assessment',
    targets: ['shoulder'],
    description: 'Passive internal rotation in 90° of shoulder flexion to compress subacromial contents.',
    howTo: [
      'Flex the shoulder and elbow to 90°.',
      'Support the elbow and forearm.',
      'Passively internally rotate the shoulder. Pain = positive.',
    ],
    indications: ['Subacromial impingement', 'Supraspinatus involvement'],
  },
  {
    id: 'as-empty-can',
    name: 'Empty can (Jobe) test',
    category: 'assessment',
    targets: ['shoulder'],
    description: 'Isolates supraspinatus for resisted testing.',
    howTo: [
      'Abduct the arm to 90° in the scapular plane, thumbs pointing down.',
      'Apply downward pressure while the patient resists.',
      'Weakness or pain = positive.',
    ],
    indications: ['Supraspinatus tendinopathy or tear'],
  },
  {
    id: 'as-apprehension',
    name: 'Anterior apprehension test',
    category: 'assessment',
    targets: ['shoulder'],
    description: 'Assesses anterior glenohumeral instability.',
    howTo: [
      'With patient supine, shoulder abducted 90° and externally rotated.',
      'Apply gentle anterior force to the humeral head.',
      'Apprehension (not just pain) is a positive.',
    ],
    indications: ['Recurrent anterior shoulder dislocation', 'Labral pathology'],
  },

  // Elbow
  {
    id: 'as-cozen',
    name: "Cozen's test",
    category: 'assessment',
    targets: ['elbow'],
    description: 'Resisted wrist extension to provoke lateral epicondylalgia.',
    howTo: [
      'Stabilise the elbow in slight flexion and palpate the lateral epicondyle.',
      'Patient makes a fist, pronates and radially deviates the wrist.',
      'Resist wrist extension. Pain at the lateral epicondyle = positive.',
    ],
    indications: ['Suspected lateral epicondylalgia'],
  },
  {
    id: 'as-mills',
    name: "Mill's test",
    category: 'assessment',
    targets: ['elbow'],
    description: 'Passive stretch of the common extensor origin.',
    howTo: [
      'Passively pronate the forearm, flex the wrist and extend the elbow.',
      'Palpate over the lateral epicondyle.',
      'Pain = positive.',
    ],
    indications: ['Lateral epicondylalgia'],
  },
  {
    id: 'as-golfers',
    name: "Golfer's elbow test",
    category: 'assessment',
    targets: ['elbow'],
    description: 'Resisted wrist flexion + supination to provoke the common flexor origin.',
    howTo: [
      'Elbow extended, forearm supinated, wrist extended.',
      'Resist wrist flexion.',
      'Medial epicondyle pain = positive.',
    ],
    indications: ['Medial epicondylalgia'],
  },

  // Wrist
  {
    id: 'as-phalen',
    name: "Phalen's test",
    category: 'assessment',
    targets: ['wrist'],
    description: 'Sustained wrist flexion to provoke median nerve symptoms.',
    howTo: [
      'Patient holds the backs of the hands together with wrists fully flexed for 60 seconds.',
      'Reproduction of paraesthesia in median distribution = positive.',
    ],
    indications: ['Suspected carpal tunnel syndrome'],
  },
  {
    id: 'as-tinel',
    name: "Tinel's sign (at wrist)",
    category: 'assessment',
    targets: ['wrist'],
    description: 'Percussion over the median nerve at the carpal tunnel.',
    howTo: [
      'Tap firmly over the midline of the volar wrist crease.',
      'Tingling into the median nerve distribution = positive.',
    ],
    indications: ['Carpal tunnel syndrome'],
  },
  {
    id: 'as-finkelstein',
    name: 'Finkelstein / Eichhoff test',
    category: 'assessment',
    targets: ['wrist'],
    description: 'Provokes tendons of the first dorsal compartment.',
    howTo: [
      'Patient makes a fist with thumb enclosed inside the fingers.',
      'Examiner passively ulnar-deviates the wrist.',
      'Sharp radial-sided wrist pain = positive.',
    ],
    indications: ["De Quervain's tenosynovitis"],
  },
  {
    id: 'as-watson',
    name: "Watson's scaphoid shift",
    category: 'assessment',
    targets: ['wrist'],
    description: 'Assesses scapholunate ligament integrity.',
    howTo: [
      'With thumb pressing on the distal pole of the scaphoid, move the wrist from ulnar to radial deviation.',
      'A palpable clunk or pain over the SL joint = positive.',
    ],
    indications: ['Suspected scapholunate dissociation'],
  },

  // Hip
  {
    id: 'as-fadir',
    name: 'FADIR test',
    category: 'assessment',
    targets: ['hip'],
    description: 'Flexion-Adduction-Internal Rotation of the hip, sensitive for anterior impingement.',
    howTo: [
      'Patient supine. Flex the hip and knee to 90°.',
      'Adduct and internally rotate the hip.',
      'Reproduction of anterior groin pain = positive.',
    ],
    indications: ['Femoroacetabular impingement', 'Labral tear'],
  },
  {
    id: 'as-faber',
    name: 'FABER (Patrick) test',
    category: 'assessment',
    targets: ['hip'],
    description: 'Flexion-Abduction-External Rotation, screens hip and SIJ.',
    howTo: [
      'Supine. Place the foot of the tested side on the opposite knee (figure-4).',
      'Gently press down on the tested knee while stabilising the opposite ASIS.',
      'Groin pain suggests hip; posterior pain suggests SIJ.',
    ],
    indications: ['Hip or SIJ pathology screening'],
  },
  {
    id: 'as-trendelenburg',
    name: 'Trendelenburg test',
    category: 'assessment',
    targets: ['hip'],
    description: 'Single-leg stance, screens gluteus medius function.',
    howTo: [
      'Patient stands on the tested leg for up to 30 seconds.',
      'The non-stance pelvis should remain level or slightly rise.',
      'A drop of the contralateral pelvis = positive (gluteus medius weakness).',
    ],
    indications: ['Gluteal tendinopathy', 'Hip abductor weakness'],
  },
  {
    id: 'as-thomas',
    name: "Thomas test",
    category: 'assessment',
    targets: ['hip'],
    description: 'Screens for hip flexor tightness.',
    howTo: [
      'Patient supine at end of plinth. Pull one knee to the chest.',
      'Observe the opposite thigh and knee.',
      'Failure of the opposite thigh to rest on the plinth = iliopsoas tightness; knee extension = rectus femoris tightness.',
    ],
    indications: ['Anterior hip pain', 'Gait asymmetry'],
  },

  // Knee
  {
    id: 'as-lachman',
    name: "Lachman's test",
    category: 'assessment',
    targets: ['knee'],
    description: 'Most sensitive test for ACL integrity.',
    howTo: [
      'Patient supine, knee flexed ~20–30°.',
      'Stabilise the distal femur with one hand, grip the proximal tibia with the other.',
      'Translate the tibia anteriorly. Increased excursion and soft end-feel = positive.',
    ],
    indications: ['Suspected ACL rupture'],
  },
  {
    id: 'as-anterior-drawer-knee',
    name: 'Anterior drawer (knee)',
    category: 'assessment',
    targets: ['knee'],
    description: 'ACL screening with the knee at 90°.',
    howTo: [
      'Patient supine, hip 45°, knee 90°. Sit lightly on the foot.',
      'Grip the proximal tibia with both hands and pull anteriorly.',
      'Excess anterior translation = positive.',
    ],
    indications: ['ACL rupture (less sensitive than Lachman)'],
  },
  {
    id: 'as-mcmurray',
    name: "McMurray's test",
    category: 'assessment',
    targets: ['knee'],
    description: 'Provocation test for meniscal tears.',
    howTo: [
      'Patient supine. Fully flex the hip and knee.',
      'Palpate the joint line. Extend the knee while applying internal rotation (lateral meniscus) or external rotation + valgus (medial meniscus).',
      'Click with pain at the joint line = positive.',
    ],
    indications: ['Suspected meniscal tear'],
  },
  {
    id: 'as-clarke',
    name: "Clarke's sign",
    category: 'assessment',
    targets: ['knee'],
    description: 'Patellofemoral compression for PFPS.',
    howTo: [
      'Patient supine, knee extended.',
      'Apply downward and distal pressure just above the patella.',
      'Ask the patient to contract the quadriceps. Pain = positive (use cautiously — low specificity).',
    ],
    indications: ['Patellofemoral pain syndrome'],
  },

  // Ankle
  {
    id: 'as-ant-drawer-ankle',
    name: 'Anterior drawer (ankle)',
    category: 'assessment',
    targets: ['ankle'],
    description: 'Tests ATFL integrity.',
    howTo: [
      'Patient seated with foot relaxed, ankle in slight plantarflexion.',
      'Stabilise the distal tibia, cup the heel and draw it anteriorly.',
      'Excess anterior translation or soft end-feel = positive.',
    ],
    indications: ['Lateral ankle sprain (ATFL)'],
  },
  {
    id: 'as-talar-tilt',
    name: 'Talar tilt (inversion stress)',
    category: 'assessment',
    targets: ['ankle'],
    description: 'Tests CFL integrity.',
    howTo: [
      'Foot in neutral, stabilise the tibia.',
      'Apply an inversion force through the calcaneus.',
      'Excess inversion or pain = positive.',
    ],
    indications: ['Lateral ankle sprain (CFL)'],
  },
  {
    id: 'as-squeeze',
    name: 'Squeeze test',
    category: 'assessment',
    targets: ['ankle'],
    description: 'Screens for syndesmotic injury.',
    howTo: [
      'Squeeze the tibia and fibula together at mid-calf.',
      'Pain referred distally to the ankle = positive.',
    ],
    indications: ['Suspected high ankle sprain'],
  },
  {
    id: 'as-thompson',
    name: "Thompson's test",
    category: 'assessment',
    targets: ['ankle'],
    description: 'Screens for complete Achilles rupture.',
    howTo: [
      'Patient prone with foot off the end of the plinth.',
      'Squeeze the calf midbelly.',
      'Absence of plantarflexion = positive.',
    ],
    indications: ['Suspected Achilles tendon rupture'],
  },
  {
    id: 'as-single-leg-hop',
    name: 'Single-leg hop for distance',
    category: 'assessment',
    targets: ['knee', 'ankle', 'hip'],
    description: 'Functional return-to-sport testing for lower limb.',
    howTo: [
      'Patient hops as far as possible on one leg, sticking the landing.',
      'Compare left/right. >90% symmetry is a typical return-to-sport benchmark.',
    ],
    indications: ['Late-stage lower-limb rehab screening'],
  },
]

export const assessmentById = (id: string) => ASSESSMENTS.find((a) => a.id === id)
