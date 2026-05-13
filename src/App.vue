<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainNavigation from './components/mainNavigation.vue'
</script>

<template>
  <div class="relative h-full w-full overflow-x-hidden">
    <div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        class="aurora-a absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full opacity-40 blur-3xl"
        style="
          background: radial-gradient(
            circle at center,
            oklch(0.65 0.18 275 / 0.85),
            oklch(0.6 0.2 320 / 0.4) 45%,
            transparent 70%
          );
        "
      />
      <div
        class="aurora-b absolute -bottom-48 -right-48 h-[55vmax] w-[55vmax] rounded-full opacity-35 blur-3xl"
        style="
          background: radial-gradient(
            circle at center,
            oklch(0.7 0.16 220 / 0.85),
            oklch(0.65 0.18 270 / 0.4) 45%,
            transparent 70%
          );
        "
      />
    </div>
    <div class="grain" aria-hidden="true" />

    <MainNavigation />
    <div class="w-full">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>
