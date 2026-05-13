import { jobsData } from '@/data/jobsData'
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
      meta: { title: 'Home', showInNav: true },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutMeView,
      meta: { title: 'About me', showInNav: true },
    },
    {
      path: '/cv',
      name: 'cv',
      component: CurriculumVitae,
      props: { jobs: jobsData },
      meta: { title: 'CV', showInNav: true },
    },
  ],
})

export default router
