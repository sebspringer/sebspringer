export interface Technology {
  name: string
  level: number
  experience?: string
}

export interface SkillCategory {
  name: string
  technologies: Technology[]
}
