export interface Technology {
  name: string
  level: number
  experience?: string
  years?: number
}

export interface SkillCategory {
  name: string
  technologies: Technology[]
}
