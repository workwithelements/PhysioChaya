import type { QuizQuestion } from '../types'

export const QUIZ: QuizQuestion[] = [
  // Shoulder
  {
    id: 'q-sh-1',
    jointId: 'shoulder',
    question: 'Which muscle is MOST isolated by the empty-can (Jobe) test?',
    choices: ['Infraspinatus', 'Supraspinatus', 'Subscapularis', 'Teres minor'],
    answerIndex: 1,
    explanation:
      'Empty-can positions the arm at 90° abduction in the scapular plane with thumbs down, biasing supraspinatus.',
  },
  {
    id: 'q-sh-2',
    jointId: 'shoulder',
    question: 'A painful arc between 60° and 120° of abduction is most suggestive of:',
    choices: ['Adhesive capsulitis', 'Subacromial impingement', 'Acromioclavicular joint sprain', 'Labral tear'],
    answerIndex: 1,
    explanation:
      'That is the classic range where subacromial structures are compressed under the coracoacromial arch.',
  },
  {
    id: 'q-sh-3',
    jointId: 'shoulder',
    question: 'Which is the capsular pattern of the glenohumeral joint?',
    choices: [
      'Flexion > extension > rotation',
      'External rotation > abduction > internal rotation',
      'Internal rotation > flexion > abduction',
      'Abduction > flexion > extension',
    ],
    answerIndex: 1,
    explanation: 'ER is lost first, then abduction, then IR — a hallmark of adhesive capsulitis.',
  },
  {
    id: 'q-sh-4',
    jointId: 'shoulder',
    question: 'Which exercise is most appropriate for early scapular stabiliser retraining?',
    choices: ['Barbell overhead press', 'Prone Y/T/W', 'Behind-the-neck pulldown', 'Upright row'],
    answerIndex: 1,
    explanation: 'Prone Y/T/W biases lower/middle trapezius and rhomboids with minimal upper-trap overactivity.',
  },

  // Elbow
  {
    id: 'q-el-1',
    jointId: 'elbow',
    question: 'Lateral epicondylalgia most commonly involves which tendon?',
    choices: ['Flexor carpi radialis', 'Extensor carpi radialis brevis', 'Pronator teres', 'Biceps brachii'],
    answerIndex: 1,
    explanation: 'ECRB is the most commonly affected tendon in tennis elbow.',
  },
  {
    id: 'q-el-2',
    jointId: 'elbow',
    question: 'The Tyler twist is designed to deliver what kind of load to the wrist extensors?',
    choices: ['Concentric', 'Isometric', 'Eccentric', 'Plyometric'],
    answerIndex: 2,
    explanation: 'The untwist phase delivers a slow eccentric load to the wrist extensors.',
  },
  {
    id: 'q-el-3',
    jointId: 'elbow',
    question: 'Which test provokes the common flexor origin?',
    choices: ["Mill's test", "Cozen's test", "Golfer's elbow test", 'Tinel at the elbow'],
    answerIndex: 2,
    explanation: "Golfer's elbow test uses resisted wrist flexion/pronation to load the medial epicondyle.",
  },
  {
    id: 'q-el-4',
    jointId: 'elbow',
    question: "Which manual therapy technique often produces immediate grip improvement in lateral epicondylalgia when indicated?",
    choices: ['Olecranon distraction', 'Mulligan lateral elbow MWM', 'Posterior radial head glide', 'Medial epicondyle friction'],
    answerIndex: 1,
    explanation: "A sustained lateral glide on the ulna during grip is Mulligan's classic MWM for this condition.",
  },

  // Wrist
  {
    id: 'q-wr-1',
    jointId: 'wrist',
    question: "Finkelstein's test targets which compartment?",
    choices: ['2nd dorsal', '1st dorsal (APL, EPB)', '6th dorsal', '3rd dorsal (EPL)'],
    answerIndex: 1,
    explanation: 'APL and EPB traverse the 1st dorsal compartment — the site of De Quervain\'s.',
  },
  {
    id: 'q-wr-2',
    jointId: 'wrist',
    question: 'Night paraesthesia in the thumb, index, middle and radial half of the ring finger is characteristic of:',
    choices: ['Ulnar nerve entrapment at the elbow', 'Carpal tunnel syndrome', "De Quervain's tenosynovitis", 'Scapholunate sprain'],
    answerIndex: 1,
    explanation: 'That distribution matches the median nerve supply to the hand.',
  },
  {
    id: 'q-wr-3',
    jointId: 'wrist',
    question: 'Which test best screens for scapholunate ligament integrity?',
    choices: ["Phalen's", "Watson's scaphoid shift", "Finkelstein's", "Tinel's at the wrist"],
    answerIndex: 1,
    explanation: 'Watson\'s test moves the wrist from ulnar to radial deviation while pressing the scaphoid.',
  },
  {
    id: 'q-wr-4',
    jointId: 'wrist',
    question: 'Tendon glides are most commonly prescribed early in rehab for:',
    choices: ['Distal radius fracture', 'Carpal tunnel syndrome', 'TFCC tear', 'Scaphoid fracture'],
    answerIndex: 1,
    explanation: 'Tendon glides mobilise the flexor tendons through the carpal tunnel, easing median nerve pressure.',
  },

  // Hip
  {
    id: 'q-hi-1',
    jointId: 'hip',
    question: 'A positive FADIR test is most associated with:',
    choices: ['SIJ dysfunction', 'Femoroacetabular impingement', 'Gluteal tendinopathy', 'Hamstring tear'],
    answerIndex: 1,
    explanation: 'FADIR loads the anterior capsulolabral structures implicated in FAI.',
  },
  {
    id: 'q-hi-2',
    jointId: 'hip',
    question: "A positive 30-second single-leg stance test with lateral hip pain best supports:",
    choices: ['Iliopsoas tendinopathy', 'Gluteal tendinopathy', 'Adductor strain', 'Femoral neck stress fracture'],
    answerIndex: 1,
    explanation: 'Sustained single-leg loading provokes the gluteal tendons at the greater trochanter.',
  },
  {
    id: 'q-hi-3',
    jointId: 'hip',
    question: 'Which movement is typically lost FIRST in hip osteoarthritis?',
    choices: ['Flexion', 'Internal rotation', 'Abduction', 'Extension'],
    answerIndex: 1,
    explanation: 'Internal rotation is typically the first and most restricted direction in hip OA.',
  },
  {
    id: 'q-hi-4',
    jointId: 'hip',
    question: 'Clamshells primarily target which muscle?',
    choices: ['Gluteus maximus', 'Gluteus medius', 'Piriformis', 'Adductor longus'],
    answerIndex: 1,
    explanation: 'Clamshells are a go-to for gluteus medius (posterior fibres) activation.',
  },

  // Knee
  {
    id: 'q-kn-1',
    jointId: 'knee',
    question: 'The most SENSITIVE clinical test for ACL rupture is:',
    choices: ['Anterior drawer', "Lachman's test", 'Pivot shift', "McMurray's"],
    answerIndex: 1,
    explanation: "Lachman's has superior sensitivity, especially in the acute setting.",
  },
  {
    id: 'q-kn-2',
    jointId: 'knee',
    question: 'A rapid-onset effusion within 2 hours of knee injury most commonly indicates:',
    choices: ['Simple contusion', 'Haemarthrosis (e.g. ACL tear)', 'Synovitis', 'Chronic effusion'],
    answerIndex: 1,
    explanation: 'Rapid haemarthrosis suggests vascular structures (ACL, osteochondral fracture, capsular tear).',
  },
  {
    id: 'q-kn-3',
    jointId: 'knee',
    question: 'Patellofemoral pain is often driven by weakness at the:',
    choices: ['Hip abductors and external rotators', 'Calf', 'Lumbar extensors', 'Ankle evertors'],
    answerIndex: 0,
    explanation: 'Hip weakness produces dynamic valgus, loading the patellofemoral joint.',
  },
  {
    id: 'q-kn-4',
    jointId: 'knee',
    question: "A positive McMurray's test best supports:",
    choices: ['MCL sprain', 'Meniscal tear', 'Patellar tendinopathy', 'Osgood–Schlatter'],
    answerIndex: 1,
    explanation: 'McMurray\'s loads the menisci; a palpable click with joint-line pain is positive.',
  },

  // Ankle
  {
    id: 'q-an-1',
    jointId: 'ankle',
    question: 'In a typical lateral ankle sprain, which ligament is most commonly injured first?',
    choices: ['Calcaneofibular (CFL)', 'Posterior talofibular (PTFL)', 'Anterior talofibular (ATFL)', 'Deltoid'],
    answerIndex: 2,
    explanation: 'ATFL is the weakest and most commonly injured in inversion sprains.',
  },
  {
    id: 'q-an-2',
    jointId: 'ankle',
    question: 'A positive squeeze test raises suspicion for:',
    choices: ['Lateral ankle sprain', 'High (syndesmotic) ankle sprain', 'Achilles tendinopathy', "Sever's disease"],
    answerIndex: 1,
    explanation: 'Compressing the tib-fib at mid-calf stresses the syndesmosis — pain distally = positive.',
  },
  {
    id: 'q-an-3',
    jointId: 'ankle',
    question: "Thompson's test is used to screen for:",
    choices: ['ATFL tear', 'Achilles tendon rupture', 'Peroneal subluxation', 'Plantar fasciopathy'],
    answerIndex: 1,
    explanation: 'Squeezing the calf in prone should elicit plantarflexion; absence suggests a ruptured Achilles.',
  },
  {
    id: 'q-an-4',
    jointId: 'ankle',
    question: 'Which MWM is well-supported for restoring dorsiflexion after a lateral ankle sprain?',
    choices: [
      'Anterior talar glide in sitting',
      'Posterior talar glide MWM in a weight-bearing lunge',
      'Subtalar eversion glide in prone',
      'Calcaneal distraction in supine',
    ],
    answerIndex: 1,
    explanation:
      'A sustained posterior glide on the talus during a weight-bearing lunge reliably improves dorsiflexion range.',
  },
]
