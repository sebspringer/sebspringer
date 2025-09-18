<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About me', href: '/sebspringer/about', current: false },
  { name: 'CV', href: '/sebspringer/cv', current: false },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="flex inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8 w-full" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="/" class="-m-1.5 p-1.5">
          <img class="h-8 w-auto" src="/src/assets/sspringer.svg" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-sm/6 font-semibold text-white"
          >{{ item.name }}</a
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a
          href="https://www.linkedin.com/in/sebastianspringer/"
          class="text-sm/6 font-semibold text-white"
          target="_blank"
          >Contact me <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-50" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10"
      >
        <div class="flex items-center justify-between">
          <a href="/" class="-m-1.5 p-1.5">
            <img class="h-8 w-auto" src="/src/assets/sspringer.svg" alt="" />
          </a>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-200"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-white/10">
            <div class="space-y-2 py-6">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
