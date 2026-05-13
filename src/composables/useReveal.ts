import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

export interface RevealOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

export function useReveal<T extends HTMLElement = HTMLElement>(
  options: RevealOptions = {},
): { target: Ref<T | null>; revealed: Ref<boolean> } {
  const target = ref<T | null>(null) as Ref<T | null>
  const revealed = ref(false)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!target.value || typeof IntersectionObserver === 'undefined') {
      revealed.value = true
      return
    }
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealed.value = true
            if (options.once !== false) observer?.disconnect()
          } else if (options.once === false) {
            revealed.value = false
          }
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '0px 0px -10% 0px',
      },
    )
    observer.observe(target.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return { target, revealed }
}
