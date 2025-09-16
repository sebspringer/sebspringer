import type { SkillCategory } from '@/models/skillCategoryModel'

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frameworks & Tools',
    technologies: [
      { name: 'VueJS (Vue2 + Vue3)', level: 8 },
      { name: 'Angular', level: 7 },
      { name: 'Vite', level: 7 },
      { name: 'Tailwind', level: 8 },
      { name: 'Storybook', level: 6 },
      { name: 'Playwright', level: 6 },
      { name: 'Git & Github', level: 8 },
      { name: 'Docker', level: 5 },
      { name: 'AWS', level: 3 },
    ],
  },
  {
    name: 'Web / Software Development',
    technologies: [
      { name: 'HTML5', level: 9 },
      { name: 'CSS3', level: 9 },
      { name: 'JavaScript', level: 8 },
      { name: 'React', level: 3 },
      { name: 'SASS', level: 7 },
      { name: 'Rest API', level: 7 },
    ],
  },
  {
    name: 'Design',
    technologies: [
      { name: 'Web Design', level: 8 },
      { name: 'Graphic Design', level: 7 },
      { name: 'UI', level: 8 },
    ],
  },
  {
    name: 'Analysis',
    technologies: [
      { name: 'SEO', level: 7 },
      { name: 'Google Analytics', level: 6 },
      { name: 'Selling Data', level: 5 },
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
      { name: 'Python', level: 1 },
      { name: 'Crew AI', level: 1 },
      { name: 'LangGraph & LangChain', level: 1 },
    ],
  },
  {
    name: 'AI Tools',
    technologies: [
      { name: 'ChatGPT', level: 8 },
      { name: 'Copilot', level: 7 },
      { name: 'CrewAI', level: 2 },
      { name: 'N8N', level: 4 },
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
