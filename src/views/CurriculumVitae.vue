<script setup lang="ts">
import ExperienceComponent from '@/components/experienceComponent.vue'
import SkillsComponent from '@/components/skillsComponent.vue'
import { skillCategories } from '@/data/skillCategoriesData'
import type { Job } from '@/models/jobsModel'

defineProps<{
  jobs: Job[]
}>()
</script>
<template>
  <div>
    <ExperienceComponent :jobs="jobs" />
    <SkillsComponent :skills="skillCategories" />
  </div>
</template>
