<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useReveal } from '@/composables/useReveal'

interface Snippet {
  filename: string
  code: string
}

const snippets: Snippet[] = [
  {
    filename: 'developer.ts',
    code: `const developer = {
  name: 'Sebastian Springer',
  base: 'Copenhagen, Denmark',
  yearsCoding: 15,
  currentlyAt: 'Eupry',
  stack: ['Vue', 'TypeScript', 'Tailwind'],
  exploring: 'AI Agents',
}`,
  },
  {
    filename: 'ai.ts',
    code: `// AI is my newfound passion
const aiStack = {
  pair: ['Claude', 'ChatGPT', 'Copilot'],
  building: 'AI Agentic OS',
  optimizing: 'tokens, context, cache',
  automating: 'workflows with n8n',
  exploring: 'agents that ship code',
}`,
  },
  {
    filename: 'pair.ts',
    code: `async function pairWithAI(human, agent) {
  const plan = await brainstorm(human, agent)
  const code = await agent.implement(plan)
  return ship(code, { reviewed: true })
}`,
  },
  {
    filename: 'principles.ts',
    code: `// What I bring to a team
const principles = [
  'Quality over speed',
  'Design + dev, no gap',
  'Long-term thinking',
  'Everyone gets heard',
]`,
  },
  {
    filename: 'today.ts',
    code: `async function buildSomething(scalable) {
  while (curious) {
    await learn()
    await ship()
    rest(8)
  }
  return greatness
}`,
  },
]

type TokenType =
  | 'keyword'
  | 'string'
  | 'number'
  | 'comment'
  | 'punct'
  | 'fn'
  | 'prop'
  | 'ident'
  | 'space'

interface Token {
  type: TokenType
  text: string
  end: number
}

const KEYWORDS = new Set([
  'const',
  'let',
  'var',
  'function',
  'return',
  'while',
  'if',
  'else',
  'for',
  'await',
  'async',
  'new',
  'true',
  'false',
  'null',
  'undefined',
])

function tokenize(src: string): Token[] {
  const tokens: Token[] = []
  let i = 0
  let pos = 0
  const push = (type: TokenType, text: string) => {
    pos += text.length
    tokens.push({ type, text, end: pos })
  }

  while (i < src.length) {
    const c = src[i]
    const rest = src.slice(i)

    const commentMatch = rest.match(/^\/\/[^\n]*/)
    if (commentMatch) {
      push('comment', commentMatch[0])
      i += commentMatch[0].length
      continue
    }

    const stringMatch = rest.match(/^(['"`])(?:\\.|(?!\1)[^\\])*\1?/)
    if (stringMatch) {
      push('string', stringMatch[0])
      i += stringMatch[0].length
      continue
    }

    const numberMatch = rest.match(/^\d+(?:\.\d+)?/)
    if (numberMatch) {
      push('number', numberMatch[0])
      i += numberMatch[0].length
      continue
    }

    const identMatch = rest.match(/^[A-Za-z_$][\w$]*/)
    if (identMatch) {
      const word = identMatch[0]
      const after = src[i + word.length]
      let type: TokenType = 'ident'
      if (KEYWORDS.has(word)) type = 'keyword'
      else if (after === '(') type = 'fn'
      else if (after === ':') type = 'prop'
      push(type, word)
      i += word.length
      continue
    }

    const wsMatch = rest.match(/^[\s]+/)
    if (wsMatch) {
      push('space', wsMatch[0])
      i += wsMatch[0].length
      continue
    }

    push('punct', c)
    i += 1
  }

  return tokens
}

const tokenizedSnippets = snippets.map((s) => ({
  ...s,
  tokens: tokenize(s.code),
  length: s.code.length,
}))

const snippetIndex = ref(0)
const visibleLen = ref(0)

const current = computed(() => tokenizedSnippets[snippetIndex.value])

const visibleTokens = computed<Token[]>(() => {
  const len = visibleLen.value
  const out: Token[] = []
  for (const t of current.value.tokens) {
    if (t.end <= len) {
      out.push(t)
    } else {
      const overflow = t.end - len
      const slice = t.text.slice(0, t.text.length - overflow)
      if (slice.length > 0) out.push({ ...t, text: slice, end: len })
      break
    }
  }
  return out
})

const lineCount = computed(() => {
  const code = current.value.code.slice(0, visibleLen.value)
  return Math.max(1, code.split('\n').length)
})

const totalLines = computed(() => current.value.code.split('\n').length)

const reduced =
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const { target, revealed } = useReveal<HTMLDivElement>({ threshold: 0.2 })

let rafId: number | null = null
let phaseStart = 0
let phase: 'typing' | 'hold' | 'deleting' = 'typing'

const TYPE_MS_PER_CHAR = 22
const DELETE_MS_PER_CHAR = 9
const HOLD_MS = 2000

function frame(now: number) {
  const len = current.value.length
  const elapsed = now - phaseStart

  if (phase === 'typing') {
    const target = Math.min(len, Math.floor(elapsed / TYPE_MS_PER_CHAR))
    visibleLen.value = target
    if (target >= len) {
      phase = 'hold'
      phaseStart = now
    }
  } else if (phase === 'hold') {
    if (elapsed >= HOLD_MS) {
      phase = 'deleting'
      phaseStart = now
    }
  } else {
    const target = Math.max(0, len - Math.floor(elapsed / DELETE_MS_PER_CHAR))
    visibleLen.value = target
    if (target <= 0) {
      snippetIndex.value = (snippetIndex.value + 1) % tokenizedSnippets.length
      phase = 'typing'
      phaseStart = now
    }
  }

  rafId = requestAnimationFrame(frame)
}

let started = false
function maybeStart() {
  if (started || !revealed.value) return
  started = true
  if (reduced) {
    visibleLen.value = current.value.length
    return
  }
  phaseStart = performance.now()
  rafId = requestAnimationFrame(frame)
}

onMounted(() => {
  const stop = () => {
    if (revealed.value) {
      maybeStart()
    } else {
      requestAnimationFrame(stop)
    }
  }
  stop()
})

onBeforeUnmount(() => {
  if (rafId !== null) cancelAnimationFrame(rafId)
})

const lineNumbers = computed(() => {
  const total = totalLines.value
  return Array.from({ length: total }, (_, i) => i + 1)
})

const tokenClass: Record<TokenType, string> = {
  keyword: 'text-indigo-300',
  string: 'text-sky-300',
  number: 'text-amber-300',
  comment: 'text-gray-500 italic',
  punct: 'text-gray-400',
  fn: 'text-violet-300',
  prop: 'text-emerald-300',
  ident: 'text-gray-200',
  space: '',
}
</script>

<template>
  <div
    ref="target"
    class="code-editor relative w-full max-w-2xl mx-auto rounded-2xl ring-1 ring-white/10 shadow-[0_24px_80px_-20px_rgba(99,102,241,0.45)]"
  >
    <div
      class="absolute -inset-px rounded-2xl pointer-events-none opacity-60"
      aria-hidden="true"
      style="
        background:
          radial-gradient(60% 60% at 20% 0%, oklch(0.6 0.18 275 / 0.25), transparent 60%),
          radial-gradient(60% 60% at 100% 100%, oklch(0.65 0.16 220 / 0.25), transparent 60%);
        mask: linear-gradient(#000, #000);
      "
    />

    <div
      class="relative rounded-2xl overflow-hidden"
      style="background: oklch(0.18 0.012 270)"
    >
      <div class="flex items-center gap-3 px-4 h-10 border-b border-white/5">
        <div class="flex items-center gap-1.5">
          <span class="w-3 h-3 rounded-full" style="background: oklch(0.62 0.18 25)" />
          <span class="w-3 h-3 rounded-full" style="background: oklch(0.78 0.14 85)" />
          <span class="w-3 h-3 rounded-full" style="background: oklch(0.7 0.16 145)" />
        </div>
        <div class="flex-1 text-center text-xs text-gray-400 font-mono tracking-tight">
          ~/sebastian/{{ current.filename }}
        </div>
        <div class="w-12" />
      </div>

      <div class="flex font-mono text-sm leading-7 min-h-[440px]">
        <div
          class="select-none py-5 pl-5 pr-3 text-right text-gray-600 border-r border-white/5"
          aria-hidden="true"
        >
          <div v-for="n in lineNumbers" :key="n">{{ n }}</div>
        </div>

        <pre
          class="py-5 px-5 text-gray-200 whitespace-pre overflow-hidden flex-1"
        ><span
          v-for="(t, i) in visibleTokens"
          :key="i"
          :class="tokenClass[t.type]"
        >{{ t.text }}</span><span class="caret">▎</span></pre>
      </div>

      <div
        class="flex items-center justify-between px-4 h-8 border-t border-white/5 text-[11px] text-gray-500 font-mono"
      >
        <span>{{ current.filename.endsWith('.ts') ? 'TypeScript' : 'JavaScript' }}</span>
        <span>Ln {{ lineCount }}, Col {{ Math.max(1, visibleLen - current.code.lastIndexOf('\n', visibleLen - 1)) }}</span>
      </div>
    </div>

    <div
      class="absolute -bottom-3 left-6 right-6 h-6 rounded-full blur-2xl opacity-50 -z-10"
      aria-hidden="true"
      style="background: oklch(0.6 0.18 275 / 0.6)"
    />
  </div>
</template>

<style scoped>
.caret {
  display: inline-block;
  color: oklch(0.75 0.16 275);
  transform: translateY(1px);
  animation: caret-blink 1s steps(2, jump-none) infinite;
}
@keyframes caret-blink {
  50% {
    opacity: 0;
  }
}
@media (prefers-reduced-motion: reduce) {
  .caret {
    animation: none;
  }
}
</style>
