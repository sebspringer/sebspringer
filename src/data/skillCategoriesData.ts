import type { SkillCategory } from '@/models/skillCategoryModel'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frameworks & Tools',
    technologies: [
      { name: 'VueJS (Vue2 + Vue3)', level: 8, years: 6 },
      { name: 'Angular', level: 7, years: 6 },
      { name: 'Vite', level: 7, years: 2 },
      { name: 'Tailwind', level: 8, years: 3 },
      { name: 'Storybook', level: 6, years: 2 },
      { name: 'Playwright', level: 6, years: 1 },
      { name: 'Git & Github', level: 8, years: 6 },
      { name: 'Docker', level: 5, years: 2 },
      { name: 'AWS', level: 3, years: 1 },
    ],
  },
  {
    name: 'Web / Software Development',
    technologies: [
      { name: 'HTML5', level: 9, years: 15 },
      { name: 'CSS (CSS3+)', level: 9, years: 15 },
      { name: 'JavaScript', level: 8, years: 15 },
      { name: 'React', level: 3, years: 1 },
      { name: 'SASS', level: 7, years: 12 },
      { name: 'Rest API', level: 7, years: 8 },
      { name: 'Typescript', level: 7, years: 9 },
    ],
  },
  {
    name: 'Design',
    technologies: [
      { name: 'Web Design', level: 8, years: 15 },
      { name: 'Graphic Design', level: 7 },
      { name: 'UI', level: 8 },
    ],
  },
  {
    name: 'Analysis',
    technologies: [
      { name: 'SEO', level: 7, years: 8 },
      { name: 'Google Analytics', level: 6, years: 7 },
      { name: 'Selling Data', level: 5, years: 2 },
    ],
  },
  {
    name: 'Online',
    technologies: [
      { name: 'CPC', level: 6 },
      { name: 'CPL', level: 6 },
      { name: 'CPA', level: 5 },
      { name: 'CPM', level: 5 },
    ],
  },
  {
    name: 'Learning',
    technologies: [
      { name: 'Python', level: 1, years: 0.5 },
      { name: 'Crew AI', level: 1, years: 0.5 },
      { name: 'LangGraph & LangChain', level: 1, years: 0.5 },
    ],
  },
  {
    name: 'AI Tools',
    technologies: [
      { name: 'ChatGPT', level: 8, years: 2 },
      { name: 'Copilot', level: 7, years: 1 },
      { name: 'N8N', level: 4, years: 1 },
    ],
  },
  {
    name: 'Languages',
    technologies: [
      { name: 'Danish', level: 10 },
      { name: 'English', level: 8 },
      { name: 'French', level: 3 },
      { name: 'Swedish', level: 7 },
      { name: 'Norwegian', level: 7 },
    ],
  },
]
