import rawPhases from './labs.yaml'

export interface Lab {
  id: string
  subtopic: string
  labCode: string
  detail: string
  status: 'To Do' | 'In Progress' | 'Done'
  evidence?: string
  notes?: string
}

export interface Phase {
  title: string
  description: string
  icon: string
  color: string
  labs: Lab[]
}

export const phasesData = rawPhases as Phase[]
