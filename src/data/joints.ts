import type { Joint } from '../types'

// Coordinates tuned to the primitive humanoid in scene/HumanModel.tsx.
// The humanoid is centred at (0,0,0) with head up (+Y).
export const JOINTS: Joint[] = [
  {
    id: 'shoulder',
    name: 'Shoulder',
    shortName: 'Shoulder',
    markers: [
      { side: 'left', position: [0.45, 1.45, 0] },
      { side: 'right', position: [-0.45, 1.45, 0] },
    ],
    anatomy:
      'The glenohumeral joint is a ball-and-socket articulation between the humeral head and the glenoid fossa of the scapula. It trades bony stability for mobility, relying on the rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis), the labrum, glenohumeral ligaments, and the scapulothoracic muscles for dynamic control.',
    commonInjuries: [
      {
        name: 'Subacromial impingement',
        description:
          'Pain from compression of rotator cuff tendons beneath the coracoacromial arch. Painful arc 60–120° of abduction, weakness on empty-can, positive Neer/Hawkins-Kennedy.',
        relatedExerciseIds: ['ex-shldr-ER-band', 'ex-shldr-scap-retract'],
      },
      {
        name: 'Rotator cuff tendinopathy',
        description:
          'Overload tendinopathy most often of supraspinatus. Gradual onset lateral shoulder pain, worse overhead, painful resisted testing.',
        relatedExerciseIds: ['ex-shldr-ER-band', 'ex-shldr-wall-slide'],
      },
      {
        name: 'Adhesive capsulitis',
        description:
          'Global restriction of active and passive range, especially external rotation. Freezing, frozen, thawing stages over 12–24 months.',
        relatedExerciseIds: ['ex-shldr-wall-slide'],
      },
    ],
    exerciseIds: ['ex-shldr-ER-band', 'ex-shldr-scap-retract', 'ex-shldr-wall-slide'],
  },
  {
    id: 'elbow',
    name: 'Elbow',
    shortName: 'Elbow',
    markers: [
      { side: 'left', position: [0.7, 1.05, 0] },
      { side: 'right', position: [-0.7, 1.05, 0] },
    ],
    anatomy:
      'A hinge (humeroulnar and humeroradial) with a pivot (proximal radioulnar) for pronation/supination. Key stabilisers are the ulnar (MCL) and radial (LCL) collateral ligaments; the common flexor and extensor origins anchor the forearm musculature.',
    commonInjuries: [
      {
        name: 'Lateral epicondylalgia (tennis elbow)',
        description:
          'Insertional tendinopathy of the common extensor origin, most often ECRB. Pain on gripping, resisted wrist extension, middle-finger extension test.',
        relatedExerciseIds: ['ex-elbow-tyler-twist', 'ex-elbow-wrist-flex'],
      },
      {
        name: 'Medial epicondylalgia (golfer\'s elbow)',
        description:
          'Common flexor origin tendinopathy. Pain on resisted wrist flexion/pronation, tender medial epicondyle.',
        relatedExerciseIds: ['ex-elbow-wrist-flex', 'ex-elbow-pronation'],
      },
      {
        name: 'Olecranon bursitis',
        description:
          'Swelling of the bursa over the olecranon, often from direct trauma or prolonged pressure. Usually pain-free passive elbow flexion until end range.',
      },
    ],
    exerciseIds: ['ex-elbow-tyler-twist', 'ex-elbow-wrist-flex', 'ex-elbow-pronation'],
  },
  {
    id: 'wrist',
    name: 'Wrist',
    shortName: 'Wrist',
    markers: [
      { side: 'left', position: [0.9, 0.55, 0] },
      { side: 'right', position: [-0.9, 0.55, 0] },
    ],
    anatomy:
      'A complex of the radiocarpal and midcarpal joints plus distal radioulnar, with eight carpal bones arranged in two rows. The TFCC stabilises the ulnar side; the scapholunate and lunotriquetral ligaments are key intercarpal stabilisers.',
    commonInjuries: [
      {
        name: 'Carpal tunnel syndrome',
        description:
          'Median nerve compression in the carpal tunnel. Night paraesthesia in the thumb, index, middle and radial half of ring finger; positive Phalen\'s and Tinel\'s at the wrist.',
        relatedExerciseIds: ['ex-wrist-tendon-glide'],
      },
      {
        name: 'De Quervain\'s tenosynovitis',
        description:
          'Stenosing tenosynovitis of APL and EPB in the first dorsal compartment. Pain on thumb and radial-sided wrist movement; positive Finkelstein/Eichhoff.',
        relatedExerciseIds: ['ex-wrist-radial-dev'],
      },
      {
        name: 'Scapholunate ligament sprain',
        description:
          'Often follows FOOSH (fall on outstretched hand). Dorsoradial pain, tenderness over the SL joint, positive Watson\'s scaphoid shift test.',
        relatedExerciseIds: ['ex-wrist-grip'],
      },
    ],
    exerciseIds: ['ex-wrist-tendon-glide', 'ex-wrist-grip', 'ex-wrist-radial-dev'],
  },
  {
    id: 'hip',
    name: 'Hip',
    shortName: 'Hip',
    markers: [
      { side: 'left', position: [0.2, 0.15, 0] },
      { side: 'right', position: [-0.2, 0.15, 0] },
    ],
    anatomy:
      'A deep ball-and-socket between the femoral head and the acetabulum of the pelvis, reinforced by the labrum and the iliofemoral, pubofemoral and ischiofemoral ligaments. Primary movers are the glutes, iliopsoas, adductors, and deep external rotators.',
    commonInjuries: [
      {
        name: 'Gluteal tendinopathy',
        description:
          'Lateral hip pain, worse lying on the affected side and on single-leg stance. Tender over greater trochanter, positive 30s single-leg stance test.',
        relatedExerciseIds: ['ex-hip-clam', 'ex-hip-bridge'],
      },
      {
        name: 'Femoroacetabular impingement (FAI)',
        description:
          'Cam/pincer morphology causing anterior groin pain with flexion + internal rotation. Positive FADIR test.',
        relatedExerciseIds: ['ex-hip-hinge', 'ex-hip-clam'],
      },
      {
        name: 'Hip osteoarthritis',
        description:
          'Stiffness worse in the morning (<30min), groin pain, reduced IR first. Capsular pattern: IR > extension > abduction lost.',
        relatedExerciseIds: ['ex-hip-bridge', 'ex-hip-hinge'],
      },
    ],
    exerciseIds: ['ex-hip-bridge', 'ex-hip-clam', 'ex-hip-hinge'],
  },
  {
    id: 'knee',
    name: 'Knee',
    shortName: 'Knee',
    markers: [
      { side: 'left', position: [0.2, -0.75, 0] },
      { side: 'right', position: [-0.2, -0.75, 0] },
    ],
    anatomy:
      'A modified hinge joint comprising tibiofemoral and patellofemoral compartments. Stability comes from the ACL, PCL, MCL, LCL, menisci, joint capsule, and dynamic control from the quadriceps (especially VMO), hamstrings, and hip musculature.',
    commonInjuries: [
      {
        name: 'ACL rupture',
        description:
          'Typically a non-contact pivoting injury with an audible pop, rapid effusion, and instability. Positive Lachman\'s (most sensitive), anterior drawer, pivot shift.',
        relatedExerciseIds: ['ex-knee-sit-to-stand', 'ex-knee-terminal-ext'],
      },
      {
        name: 'Patellofemoral pain syndrome',
        description:
          'Anterior knee pain, worse with squatting, stairs and prolonged sitting. Often linked to hip weakness and dynamic valgus.',
        relatedExerciseIds: ['ex-knee-step-down', 'ex-hip-clam'],
      },
      {
        name: 'Meniscal tear',
        description:
          'Joint-line pain, mechanical catching/locking, delayed effusion. Positive McMurray\'s, Thessaly.',
        relatedExerciseIds: ['ex-knee-sit-to-stand', 'ex-knee-terminal-ext'],
      },
    ],
    exerciseIds: ['ex-knee-sit-to-stand', 'ex-knee-terminal-ext', 'ex-knee-step-down'],
  },
  {
    id: 'ankle',
    name: 'Ankle',
    shortName: 'Ankle',
    markers: [
      { side: 'left', position: [0.2, -1.75, 0] },
      { side: 'right', position: [-0.2, -1.75, 0] },
    ],
    anatomy:
      'A hinge (talocrural) for dorsi/plantarflexion plus the subtalar joint for inversion/eversion. Lateral stability: ATFL, CFL, PTFL. Medial stability: the fan-shaped deltoid ligament. The syndesmosis joins distal tibia and fibula above.',
    commonInjuries: [
      {
        name: 'Lateral ankle sprain',
        description:
          'Inversion mechanism injuring ATFL first, then CFL. Positive anterior drawer if ATFL compromised. Apply Ottawa Ankle Rules.',
        relatedExerciseIds: ['ex-ankle-alphabet', 'ex-ankle-band-inversion'],
      },
      {
        name: 'Achilles tendinopathy',
        description:
          'Insertional or mid-portion Achilles pain and stiffness, worse in the morning and at the start of activity; tender on palpation.',
        relatedExerciseIds: ['ex-ankle-calf-raise'],
      },
      {
        name: 'High ankle (syndesmotic) sprain',
        description:
          'Dorsiflexion + external rotation mechanism. Pain above the joint line, positive squeeze and external rotation stress tests. Slower to recover than lateral sprains.',
        relatedExerciseIds: ['ex-ankle-calf-raise', 'ex-ankle-alphabet'],
      },
    ],
    exerciseIds: ['ex-ankle-calf-raise', 'ex-ankle-alphabet', 'ex-ankle-band-inversion'],
  },
]

export const jointById = (id: string) => JOINTS.find((j) => j.id === id)
