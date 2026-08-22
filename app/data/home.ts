import homeData from './home.yaml'

export interface Link {
  label: string
  icon: string
  to: string
  target: string
}

export interface SubExperience {
  role?: string
  period?: string
  description: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  description?: string[]
  subExperiences?: SubExperience[]
}

export interface Project {
  title: string
  period?: string
  description: string
  details?: string[]
  tech: string[]
  link?: string
  thumbnail?: string
  youtubeUrl?: string
  links?: { label: string, url: string }[]
}

export interface Highlight {
  title: string
  period: string
  description: string[]
}

export const links = (homeData.links || []) as Link[]
export const experiences = (homeData.experiences || []) as Experience[]
export const projects = (homeData.projects || []) as Project[]
export const highlights = (homeData.highlights || []) as Highlight[]
