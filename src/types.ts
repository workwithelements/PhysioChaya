export type JointId = 'ankle' | 'knee' | 'hip' | 'shoulder' | 'elbow' | 'wrist'
export type Side = 'left' | 'right'

export interface Injury {
  name: string
  description: string
  relatedExerciseIds?: string[]
}

export interface Exercise {
  id: string
  name: string
  target: JointId
  description: string
  steps: string[]
}

export interface Joint {
  id: JointId
  name: string
  shortName: string
  markers: Array<{ side: Side; position: [number, number, number] }>
  anatomy: string
  commonInjuries: Injury[]
  exerciseIds: string[]
}

export type TechniqueCategory = 'assessment' | 'manualTherapy' | 'softTissue'

export interface Technique {
  id: string
  name: string
  category: TechniqueCategory
  targets: JointId[]
  description: string
  howTo: string[]
  indications: string[]
  contraindications?: string[]
}

export interface Pathology {
  id: string
  name: string
  jointRegion: JointId
  summary: string
  keyFeatures: string[]
}

export interface CaseStudy {
  id: string
  title: string
  jointRegion: JointId
  patient: { name: string; age: number; occupation: string; sport?: string }
  socialHistory: string
  assessmentFindings: string
  correctPathologyId: string
  distractorPathologyIds: string[]
  appropriateAssessmentIds: string[]
  appropriateManualTherapyIds: string[]
  appropriateSoftTissueIds: string[]
  teachingNotes: string
}

export interface QuizQuestion {
  id: string
  jointId: JointId
  question: string
  choices: string[]
  answerIndex: number
  explanation: string
}

export type GusMood = 'idle' | 'talking' | 'happy' | 'thinking'
