<script setup lang="ts">
import type { Job } from '@/models/jobsModel'

defineProps<{
  jobs: Job[]
}>()
</script>
<template>
  <div class="flex w-full justify-center">
    <div class="pt-32 w-full">
      <div>
        <div class="text-center lg:w-200 md:w-150 md: justify-center m-auto pb-6">
          <h1
            class="lg:text-5xl md:text-5xl sm:text-4xl text-4xl font-semibold tracking-tight text-balance text-white pb-2"
          >
            EXPERIENCE
          </h1>
          <a
            href="#skills"
            class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Discover My Skills
          </a>
          <p
            class="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/9 sm:pl-5 sm:pr-5"
          >
            My name is Sebastian, and I'm passionate about frontend and software development,
            bringing 15 years of experience and strong collaboration skills to every project.
            Currently I'm working for Novo Nordisk as a
            <span class="text-indigo-500">Senior Software Developer.</span>
          </p>
        </div>
        <div>
          <section class="max-w-3xl mx-auto p-6 text-left rounded">
            <div
              v-for="(job, index) in jobs"
              :key="index"
              class="flex flex-col md:flex-row md:justify-between mb-8 pb-6 [&:not(:last-child)]:border-b-2 border-gray-800"
            >
              <div class="text-white font-semibold w-32 shrink-0 sm:pb-4">
                {{ job.period }}
              </div>

              <div class="flex-1">
                <h3
                  class="font-bold uppercase"
                  :class="job.activeJob ? 'text-indigo-500' : 'text-sky-600'"
                >
                  {{ job.title }}
                </h3>
                <p class="text-sm text-gray-600 mt-1">
                  {{ job.skills.join(' | ') }}
                </p>
                <p v-if="job.description" class="mt-2 text-gray-400 text-xs">
                  {{ job.description }}
                </p>
              </div>

              <div class="text-white font-medium mt-2 md:mt-0 md:ml-12 sm:pt-4 w-22 shrink-0">
                {{ job.company }}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
