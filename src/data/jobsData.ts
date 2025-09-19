import type { Job } from '@/models/jobsModel'

export const jobsData: Job[] = [
  {
    period: 'CURRENT JOB',
    title: 'Senior Software Developer',
    skills: ['Vue2', 'Vue3', 'Agile', 'AWS', 'AI', 'GXP', 'Composition API'],
    description: 'Development of internal software for Novo Nordisk.',
    company: 'Novo Nordisk',
    activeJob: true,
  },
  {
    period: '2022-2023',
    title: 'Senior Frontend Developer',
    skills: ['Angular', 'UI design', 'Safe', 'Vue2', 'Agile', 'Scrum', 'Leadership'],
    company: 'Nordea',
  },
  {
    period: '2019-2022',
    title: 'Frontend Developer',
    skills: ['Angular', 'UI design', 'Safe', 'React', 'Development', 'Agile', 'Leadership'],
    company: 'Nets',
  },
  {
    period: '2017-2019',
    title: 'Lead Frontend Developer',
    skills: [
      'Angular',
      'UI design',
      'web development',
      'Leadership',
      'Project management',
      'App development',
      'Consultant',
      'Presentations',
      'Jira',
    ],
    company: 'Versatil',
  },
  {
    period: '2015-2017',
    title: 'Frontend Developer',
    skills: ['Web design', 'Online marketing', 'Data responsible', 'Development'],
    company: 'Autooffer',
  },
  {
    period: '2013-2015',
    title: 'Art Director & Lead Frontend Developer',
    skills: ['Web design', 'Sociale media', 'Online marketing', 'Development'],
    company: 'ZenjiLabs',
  },
  {
    period: '2010-2012',
    title: 'Web Designer & Campaign Manager',
    skills: ['Web design', 'Project management', 'Campaign optimization', 'Development'],
    company: 'Ad Pepper Media',
  },
]
