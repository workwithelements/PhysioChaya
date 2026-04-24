import type { Pathology } from '../types'

export const PATHOLOGIES: Pathology[] = [
  {
    id: 'path-subacromial-impingement',
    name: 'Subacromial impingement syndrome',
    jointRegion: 'shoulder',
    summary:
      'Compression and irritation of rotator cuff tendons and the subacromial bursa beneath the coracoacromial arch, typically with scapular dyskinesis.',
    keyFeatures: [
      'Painful arc 60–120°',
      'Positive Neer and Hawkins–Kennedy',
      'Weakness/pain on empty-can',
      'Worse overhead activity',
    ],
  },
  {
    id: 'path-rotator-cuff-tear',
    name: 'Rotator cuff tear',
    jointRegion: 'shoulder',
    summary: 'Partial or full-thickness tear, most often of supraspinatus; traumatic in younger, degenerative >50.',
    keyFeatures: ['Weakness not just pain on empty-can', 'Positive drop-arm test in full-thickness tears', 'Night pain'],
  },
  {
    id: 'path-frozen-shoulder',
    name: 'Adhesive capsulitis',
    jointRegion: 'shoulder',
    summary: 'Global capsular contracture presenting in freezing/frozen/thawing stages.',
    keyFeatures: [
      'Marked loss of passive external rotation',
      'Capsular pattern ER > abduction > IR',
      'Insidious onset, often in 40–60s',
    ],
  },
  {
    id: 'path-lateral-epicondylalgia',
    name: 'Lateral epicondylalgia',
    jointRegion: 'elbow',
    summary: 'Tendinopathy of the common extensor origin (most often ECRB).',
    keyFeatures: [
      'Tender lateral epicondyle',
      'Positive Cozen and Mill',
      'Pain on gripping',
      'Often in racquet sports or repetitive keyboard use',
    ],
  },
  {
    id: 'path-medial-epicondylalgia',
    name: 'Medial epicondylalgia',
    jointRegion: 'elbow',
    summary: "Common flexor origin tendinopathy — 'golfer's elbow'.",
    keyFeatures: ['Medial epicondyle tenderness', 'Pain on resisted wrist flexion/pronation', 'Associated with golf, throwing'],
  },
  {
    id: 'path-cts',
    name: 'Carpal tunnel syndrome',
    jointRegion: 'wrist',
    summary: 'Compression of the median nerve within the carpal tunnel.',
    keyFeatures: [
      'Night paraesthesia in median distribution',
      'Positive Phalen and Tinel at the wrist',
      'Thenar wasting in advanced cases',
    ],
  },
  {
    id: 'path-de-quervains',
    name: "De Quervain's tenosynovitis",
    jointRegion: 'wrist',
    summary: 'Stenosing tenosynovitis of APL and EPB in the first dorsal compartment.',
    keyFeatures: [
      "Positive Finkelstein/Eichhoff",
      'Radial-sided wrist pain',
      'Common post-partum or in new parents (lifting infants)',
    ],
  },
  {
    id: 'path-sl-sprain',
    name: 'Scapholunate ligament sprain',
    jointRegion: 'wrist',
    summary: 'Ligamentous injury typically post-FOOSH causing dorsoradial wrist pain.',
    keyFeatures: ['Positive Watson\'s scaphoid shift', 'Tender over SL joint', 'Reduced grip strength'],
  },
  {
    id: 'path-fai',
    name: 'Femoroacetabular impingement',
    jointRegion: 'hip',
    summary: 'Cam or pincer morphology producing anterior hip pain with flexion/IR.',
    keyFeatures: ['Positive FADIR', 'Reduced hip IR', 'Young active patient with anterior groin pain'],
  },
  {
    id: 'path-gluteal-tendinopathy',
    name: 'Gluteal tendinopathy',
    jointRegion: 'hip',
    summary: 'Tendinopathy of gluteus medius/minimus, commonly with bursal involvement (greater trochanteric pain syndrome).',
    keyFeatures: [
      'Lateral hip pain worse lying on the side',
      'Positive single-leg stance >30s',
      'Pain on resisted abduction',
    ],
  },
  {
    id: 'path-hip-oa',
    name: 'Hip osteoarthritis',
    jointRegion: 'hip',
    summary: 'Degenerative change with capsular pattern, IR lost first.',
    keyFeatures: ['Morning stiffness <30 min', 'Groin pain', 'Reduced IR'],
  },
  {
    id: 'path-acl-rupture',
    name: 'ACL rupture',
    jointRegion: 'knee',
    summary: 'Typically non-contact pivoting injury with rapid haemarthrosis.',
    keyFeatures: ['Audible pop', 'Early effusion (<4h)', "Positive Lachman's", 'Instability on cutting'],
  },
  {
    id: 'path-pfps',
    name: 'Patellofemoral pain syndrome',
    jointRegion: 'knee',
    summary: 'Anterior knee pain, worse on loaded knee flexion; often with hip/quadriceps imbalance.',
    keyFeatures: [
      'Pain on stairs, squatting, prolonged sitting (movie sign)',
      'Often dynamic valgus visible on single-leg squat',
    ],
  },
  {
    id: 'path-meniscal-tear',
    name: 'Meniscal tear',
    jointRegion: 'knee',
    summary: 'Traumatic or degenerative tear of the medial or lateral meniscus.',
    keyFeatures: ['Joint-line tenderness', 'Clicking/locking', 'Positive McMurray', 'Delayed effusion (>12h)'],
  },
  {
    id: 'path-lateral-ankle-sprain',
    name: 'Lateral ankle ligament sprain',
    jointRegion: 'ankle',
    summary: 'Inversion injury of ATFL ± CFL; the most common sports ankle injury.',
    keyFeatures: [
      'Inversion mechanism',
      'Tender ATFL/CFL',
      'Positive anterior drawer / talar tilt depending on ligaments',
    ],
  },
  {
    id: 'path-high-ankle-sprain',
    name: 'Syndesmotic (high ankle) sprain',
    jointRegion: 'ankle',
    summary: 'Injury to the distal tibiofibular syndesmosis from dorsiflexion + external rotation.',
    keyFeatures: [
      'Pain above the joint line',
      'Positive squeeze and external rotation tests',
      'Slower recovery than lateral sprains',
    ],
  },
  {
    id: 'path-achilles-tendinopathy',
    name: 'Achilles tendinopathy',
    jointRegion: 'ankle',
    summary: 'Overuse tendinopathy, commonly mid-portion.',
    keyFeatures: ['Morning stiffness', 'Tender on palpation of tendon', 'Pain at start of activity, eases then returns'],
  },
]

export const pathologyById = (id: string) => PATHOLOGIES.find((p) => p.id === id)
