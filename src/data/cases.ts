import type { CaseStudy } from '../types'

export const CASES: CaseStudy[] = [
  {
    id: 'case-shoulder-1',
    title: 'Painter with a painful arc',
    jointRegion: 'shoulder',
    patient: { name: 'Marcus', age: 46, occupation: 'House painter' },
    socialHistory:
      'Marcus is a self-employed house painter who has been working long days on a ceiling contract for three weeks. He lives alone, drives a manual van, and plays social tennis on Saturdays. No previous shoulder injury. BMI 28, otherwise healthy.',
    assessmentFindings:
      'Gradual onset of right anterolateral shoulder pain over the last month, worse overhead and reaching behind his back. Pain 6/10 with activity, 2/10 at rest, occasionally disturbs sleep when rolling onto the affected side. Active abduction shows a painful arc between 70° and 110°, then eases. Full passive range with mild end-of-range pain in flexion. Resisted empty-can produces weakness and pain. Positive Neer and Hawkins–Kennedy. Scapular dyskinesis noted on return from abduction.',
    correctPathologyId: 'path-subacromial-impingement',
    distractorPathologyIds: ['path-frozen-shoulder', 'path-rotator-cuff-tear'],
    appropriateAssessmentIds: ['as-neer', 'as-hawkins', 'as-empty-can'],
    appropriateManualTherapyIds: ['mt-gh-ap-glide', 'mt-mwm-shoulder'],
    appropriateSoftTissueIds: ['stt-trigger-point', 'stt-soft-tissue-release', 'stt-effleurage'],
    teachingNotes:
      "Everything in the history and examination points toward subacromial impingement: a painful arc, preserved passive range (ruling out frozen shoulder), positive impingement tests, and overhead-aggravating occupation. Rotator cuff tear is less likely with the preserved ability to elevate and only mild weakness. Management focuses on offloading the subacromial space — scapular control work, posterior capsule mobility, and rotator cuff strengthening in pain-free ranges.",
  },
  {
    id: 'case-shoulder-2',
    title: 'Stiffening right shoulder',
    jointRegion: 'shoulder',
    patient: { name: 'Priya', age: 52, occupation: 'Primary school teacher' },
    socialHistory:
      'Priya has type 2 diabetes (HbA1c 58 mmol/mol, reasonable control). She noticed her right shoulder becoming uncomfortable four months ago, initially thinking she had slept on it awkwardly. Right-handed. No fall or injury.',
    assessmentFindings:
      'Marked loss of both active and passive range: external rotation with arm by side 15° (compared to 70° left), abduction 80° with scapulohumeral rhythm disturbance, flexion 110°. Capsular pattern: ER > abduction > IR loss. Impingement tests inconclusive due to restricted range. Resisted testing relatively pain-free but limited by guarding. Night pain when rolling.',
    correctPathologyId: 'path-frozen-shoulder',
    distractorPathologyIds: ['path-subacromial-impingement', 'path-rotator-cuff-tear'],
    appropriateAssessmentIds: ['as-neer', 'as-hawkins', 'as-empty-can'],
    appropriateManualTherapyIds: ['mt-gh-ap-glide'],
    appropriateSoftTissueIds: ['stt-myofascial-release', 'stt-stretching', 'stt-effleurage'],
    teachingNotes:
      "The capsular pattern with marked loss of passive external rotation is the giveaway for adhesive capsulitis, particularly in a 52-year-old with diabetes (a well-known risk factor). Impingement preserves passive range; cuff tears give weakness more than stiffness. Hands-on work targets capsular extensibility; aggressive end-range loading is contraindicated in the freezing stage.",
  },
  {
    id: 'case-elbow-1',
    title: 'Tennis coach with a sore forearm',
    jointRegion: 'elbow',
    patient: { name: 'Jacinta', age: 38, occupation: 'Tennis coach', sport: 'Tennis' },
    socialHistory:
      'Jacinta coaches 25 hours a week on hard courts and recently switched to a stiffer racquet. She reports no direct trauma. She is otherwise healthy, no relevant medical history.',
    assessmentFindings:
      'Gradual onset lateral elbow pain over 6 weeks. Tender directly over the lateral epicondyle, pain reproduced on resisted wrist extension and on gripping. Positive Cozen and Mill\'s tests. Grip strength 18 kg right, 34 kg left. Full elbow range, neurovascular intact.',
    correctPathologyId: 'path-lateral-epicondylalgia',
    distractorPathologyIds: ['path-medial-epicondylalgia'],
    appropriateAssessmentIds: ['as-cozen', 'as-mills', 'as-golfers'],
    appropriateManualTherapyIds: ['mt-lateral-epi-mwm'],
    appropriateSoftTissueIds: ['stt-cross-friction', 'stt-soft-tissue-release', 'stt-iastm'],
    teachingNotes:
      "Classic lateral epicondylalgia: tender epicondyle, Cozen and Mill positive, grip deficit. Manual therapy of choice here is Mulligan's lateral glide MWM, which often produces immediate grip improvement when indicated — an excellent clinical test as well as a treatment. Eccentric wrist extensor loading (e.g. Tyler twist) is the cornerstone of exercise rehab.",
  },
  {
    id: 'case-wrist-1',
    title: 'New parent with tingling fingers',
    jointRegion: 'wrist',
    patient: { name: 'Sam', age: 34, occupation: 'Software developer' },
    socialHistory:
      'Sam has a 10-week-old baby and has been working from home while sharing night feeds. Works at a laptop without an external keyboard. Right-hand dominant. No history of diabetes or thyroid disease.',
    assessmentFindings:
      'Bilateral hand paraesthesia in the thumb, index, middle and radial half of ring fingers, worse at night and when driving. Shakes hands out to relieve. No thenar wasting. Phalen\'s test reproduces symptoms within 40 seconds. Positive Tinel\'s at the wrist. Finkelstein negative. Grip strength mildly reduced.',
    correctPathologyId: 'path-cts',
    distractorPathologyIds: ['path-de-quervains', 'path-sl-sprain'],
    appropriateAssessmentIds: ['as-phalen', 'as-tinel', 'as-finkelstein'],
    appropriateManualTherapyIds: ['mt-wrist-distraction'],
    appropriateSoftTissueIds: ['stt-soft-tissue-release', 'stt-myofascial-release', 'stt-stretching'],
    teachingNotes:
      "Median nerve distribution paraesthesia with positive Phalen and Tinel at the wrist — textbook carpal tunnel syndrome. Finkelstein being negative rules against De Quervain's, which would bias pain to the radial side. Conservative management includes nerve glides (tendon glides as a start), ergonomic review, and wrist neutral night splinting. Upstream soft tissue work targets forearm flexors and the pronator.",
  },
  {
    id: 'case-hip-1',
    title: 'Runner with lateral hip pain',
    jointRegion: 'hip',
    patient: { name: 'Helen', age: 57, occupation: 'Accountant', sport: 'Recreational running' },
    socialHistory:
      'Helen runs 30km per week, recently increased from 20km as she trains for a half marathon. Post-menopausal, BMI 26. No prior hip injury.',
    assessmentFindings:
      'Right lateral hip pain, worse lying on her right side at night and on the first few steps in the morning. No groin pain. Tender over the greater trochanter. Single-leg stance on right reproduces pain at 20 seconds with pelvic drop on the left. Pain on resisted abduction in side-lying. FADIR and FABER negative. Full passive hip range.',
    correctPathologyId: 'path-gluteal-tendinopathy',
    distractorPathologyIds: ['path-hip-oa', 'path-fai'],
    appropriateAssessmentIds: ['as-trendelenburg', 'as-faber', 'as-fadir'],
    appropriateManualTherapyIds: ['mt-hvla-hip'],
    appropriateSoftTissueIds: ['stt-trigger-point', 'stt-myofascial-release', 'stt-soft-tissue-release'],
    teachingNotes:
      "Lateral hip pain, tender greater trochanter, positive single-leg stance (Trendelenburg) within 30s — gluteal tendinopathy. FAI would give groin pain with positive FADIR; hip OA would restrict passive internal rotation. Management centres on progressive abductor loading (isometrics first, then slow heavy resistance) and sleep positioning advice (avoid side-lying on affected side, pillow between knees).",
  },
  {
    id: 'case-knee-1',
    title: 'Footballer with a twisted knee',
    jointRegion: 'knee',
    patient: { name: "Tom", age: 23, occupation: 'Carpenter', sport: 'Amateur football' },
    socialHistory:
      'Tom plays football twice a week. Injured three days ago when he planted his right foot and turned, felt a pop and immediate giving way. Hobbled off, could not continue. Otherwise healthy, no previous knee injuries.',
    assessmentFindings:
      'Moderate effusion appeared within 2 hours of injury. Unable to fully extend the knee. Positive Lachman\'s with soft end-feel, positive anterior drawer. McMurray\'s inconclusive due to guarding. Ottawa Knee Rules negative for fracture. Walking with an antalgic gait.',
    correctPathologyId: 'path-acl-rupture',
    distractorPathologyIds: ['path-meniscal-tear', 'path-pfps'],
    appropriateAssessmentIds: ['as-lachman', 'as-anterior-drawer-knee', 'as-mcmurray'],
    appropriateManualTherapyIds: ['mt-patellar-mob', 'mt-mwm-knee-flexion'],
    appropriateSoftTissueIds: ['stt-effleurage', 'stt-soft-tissue-release'],
    teachingNotes:
      "Non-contact pivoting mechanism with a pop, rapid effusion (<4h), and positive Lachman's — high suspicion of ACL rupture. Concomitant meniscal injury is common (~50%) but the effusion timing and Lachman's findings are the driver. Refer for imaging. Early physio is about regaining extension, reducing effusion, and quadriceps activation — not aggressive loading until structural decisions are made.",
  },
  {
    id: 'case-knee-2',
    title: 'Office worker with anterior knee pain',
    jointRegion: 'knee',
    patient: { name: 'Aisha', age: 28, occupation: 'Architect', sport: 'Yoga, recreational cycling' },
    socialHistory:
      'Aisha sits at a desk most of the day and recently took up trail running. She has gradually developed right anterior knee pain. No trauma, no catching or locking.',
    assessmentFindings:
      'Pain around and behind the patella, worse on stairs (especially descending), squatting, and after prolonged sitting. No effusion. Single-leg squat shows dynamic valgus on the right with pelvic drop. Reduced hip abductor strength on manual testing. Lachman and McMurray negative. Clarke\'s sign reproduces mild pain.',
    correctPathologyId: 'path-pfps',
    distractorPathologyIds: ['path-meniscal-tear', 'path-acl-rupture'],
    appropriateAssessmentIds: ['as-clarke', 'as-mcmurray', 'as-trendelenburg'],
    appropriateManualTherapyIds: ['mt-patellar-mob'],
    appropriateSoftTissueIds: ['stt-soft-tissue-release', 'stt-myofascial-release', 'stt-trigger-point'],
    teachingNotes:
      "Anterior knee pain aggravated by loaded knee flexion, dynamic valgus on single-leg squat, reduced hip abductor strength — patellofemoral pain syndrome. Notice how the exam spans the whole kinetic chain: hip weakness is the driver in many PFPS presentations. Management is hip and quadriceps strengthening (especially VMO and gluteus medius), patellar mobilisation for short-term pain relief, and activity load management.",
  },
  {
    id: 'case-ankle-1',
    title: 'Netballer with a rolled ankle',
    jointRegion: 'ankle',
    patient: { name: 'Laura', age: 19, occupation: 'University student', sport: 'Netball' },
    socialHistory:
      'Laura landed awkwardly on another player\'s foot during a game yesterday, rolling her left ankle inward. She could weight-bear but with pain. No prior ankle injuries.',
    assessmentFindings:
      'Swelling and bruising over the anterolateral ankle. Tender over ATFL and CFL. Able to weight-bear four steps with discomfort (Ottawa Ankle Rules negative). Positive anterior drawer with soft end-feel. Talar tilt mildly positive. Squeeze test negative. Dorsiflexion limited by pain.',
    correctPathologyId: 'path-lateral-ankle-sprain',
    distractorPathologyIds: ['path-high-ankle-sprain', 'path-achilles-tendinopathy'],
    appropriateAssessmentIds: ['as-ant-drawer-ankle', 'as-talar-tilt', 'as-squeeze'],
    appropriateManualTherapyIds: ['mt-talocrural-ap', 'mt-mwm-ankle-df'],
    appropriateSoftTissueIds: ['stt-effleurage', 'stt-soft-tissue-release'],
    teachingNotes:
      "Inversion mechanism, lateral tenderness, positive anterior drawer and talar tilt, negative squeeze: straightforward grade I–II lateral ankle sprain. Early management focuses on protection, optimal loading, ice, compression and elevation (POLICE), then restoring dorsiflexion (talocrural posterior glide MWM is very useful here) and rebuilding proprioception to reduce re-injury risk.",
  },
]

export const caseById = (id: string) => CASES.find((c) => c.id === id)
