import { jobsData } from '@/data/jobsData'
import { skillCategories } from '@/data/skillCategoriesData'
import AboutMeView from '@/views/AboutMeView.vue'
import CurriculumVitae from '@/views/CurriculumVitae.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMeView,
    },
    {
      path: '/CV',
      name: 'cv',
      component: CurriculumVitae,
      props: { jobs: jobsData, skillCategories: skillCategories },
    },
  ],
})

export default router
