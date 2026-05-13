<script setup lang="ts">
import { useReveal } from '@/composables/useReveal'
import CodeEditor from '@/components/codeEditor.vue'

const { target, revealed } = useReveal<HTMLDivElement>({ threshold: 0.1 })

const paragraphs = [
  `My name is Sebastian, and I'm passionate about frontend and software development, bringing 15 years of experience and strong collaboration skills to every project.`,
  `I have experience working with frameworks like React, Vue, and Angular, and my background in graphic design helps me bridge the gap between design and development, and create user-friendly interfaces. I'm also experienced in Agile and SAFe environments.`,
  `I've had the opportunity to work in fast-paced, multicultural teams, both in startups and in larger organizations such as Novo Nordisk, Nets, and Nordea.`,
  `I'm passionate about helping teams navigate challenges and aligning technical directions with business objectives to deliver impactful results together, ensuring that everyone is heard and contributes to the shared goals.`,
  `Outside of work, I'm exploring the world of AI, which is my newfound passion. I enjoy travelling around the world and discovering new places, and staying active by playing basketball.`,
]
</script>

<template>
  <div
    class="mx-auto w-full max-w-7xl px-6 py-16 grid gap-12 lg:gap-16 lg:grid-cols-[1.05fr_1fr] items-start"
  >
    <div ref="target" class="max-w-prose">
      <h1
        class="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl reveal"
        :class="{ 'is-visible': revealed }"
      >
        About
      </h1>
      <p
        v-for="(paragraph, i) in paragraphs"
        :key="i"
        class="mt-6 text-gray-400 leading-relaxed reveal"
        :class="{ 'is-visible': revealed }"
        :style="{ '--reveal-delay': `${(i + 1) * 110}ms` }"
      >
        {{ paragraph }}
      </p>
    </div>

    <div
      class="lg:mt-28 lg:sticky lg:top-24 reveal"
      :class="{ 'is-visible': revealed }"
      style="--reveal-delay: 220ms"
    >
      <CodeEditor />
    </div>
  </div>
</template>
