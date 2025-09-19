<script setup lang="ts">
import type { SkillCategory } from '@/models/skillCategoryModel'
import { ref, onMounted } from 'vue'

const maxLevel: number = 10
const animated = ref(false)

onMounted(() => {
  setTimeout(() => {
    animated.value = true
  }, 200)
})

defineProps<{
  skills: SkillCategory[]
}>()

const getLevelDescription = (level: number): string => {
  if (level <= 3) return 'Beginner'
  if (level <= 6) return 'Intermediate'
  if (level <= 8) return 'Proficient'
  return 'Expert'
}
</script>

<template>
  <div class="flex w-full justify-center" id="skills">
    <div class="pt-16 w-full">
      <div class="text-center max-w-2xl m-auto pb-6">
        <h2
          class="lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-semibold tracking-tight text-balance text-white"
        >
          SKILLS
        </h2>
        <p class="mt-4 text-lg font-medium text-pretty text-gray-400 sm:text-xl/9 sm:pl-5 sm:pr-5">
          An overview of my current skills, experience levels, and related tools.
        </p>
      </div>

      <section class="max-w-2xl mx-auto p-4 text-left rounded">
        <div
          v-for="(category, index) in skills"
          :key="index"
          class="mb-6 pb-4 [&:not(:last-child)]:border-b border-gray-800"
        >
          <h2 class="text-md font-bold text-sky-700 mb-3 uppercase">
            {{ category.name }}
          </h2>

          <div v-for="(tech, tIndex) in category.technologies" :key="tIndex" class="mb-4">
            <!-- Name + Level + Years -->
            <div class="flex justify-between items-center text-sm text-gray-300 mb-1">
              <span class="font-medium">{{ tech.name }}</span>
              <span class="text-gray-400 text-xs">
                {{ getLevelDescription(tech.level) }}
                <span v-if="tech.years">
                  · {{ tech.years }} year<span v-if="tech.years > 1">s</span>
                </span>
              </span>
            </div>

            <!-- Progress bar -->
            <div class="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
              <div
                class="h-1.5 bg-indigo-500 rounded-full transition-all duration-1000 ease-out"
                :style="{ width: animated ? (tech.level / maxLevel) * 100 + '%' : '0%' }"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
