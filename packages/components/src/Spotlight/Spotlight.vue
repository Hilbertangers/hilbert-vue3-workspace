<template>
  <transition name="h-spotlight-fade">
    <div class="h-spotlight" v-show="visible">
      <div class="h-spotlight-overlay" @click="close"></div>
      <transition name="h-spotlight-scale">
        <div class="h-spotlight-container" v-show="visible">
          <div class="h-spotlight-content">
            <div class="h-spotlight-search">
              <i class="h-icon h-icon-search"></i>
              <input
                ref="searchInput"
                v-model="searchQuery"
                :placeholder="placeholder"
                class="h-spotlight-input"
                @keydown.up.prevent="navigateUp"
                @keydown.down.prevent="navigateDown"
                @keydown.enter="handleEnter"
                @keydown.esc="close"
              />
            </div>

            <div class="h-spotlight-actions" v-if="filteredActions.length">
              <div
                v-for="(action, index) in filteredActions"
                :key="action.id"
                class="h-spotlight-action"
                :class="{ 'is-active': index === activeIndex }"
                :ref="(el) => setActionRef(el, index)"
                @click="triggerActionByIndex(index)"
              >
                <div class="h-spotlight-action-icon" v-if="action.icon">
                  <i :class="action.icon"></i>
                </div>
                <div class="h-spotlight-action-content">
                  <div
                    class="h-spotlight-action-title"
                    v-html="highlightText(action.title, 'title', action)"
                  ></div>
                  <div
                    class="h-spotlight-action-description"
                    v-if="action.description"
                    v-html="highlightText(action.description, 'description', action)"
                  ></div>
                </div>
              </div>
            </div>

            <div v-else class="h-spotlight-empty">
              {{ emptyText }}
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, nextTick, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import Fuse from 'fuse.js'
import type { IFuseOptions } from 'fuse.js'
import { useSpotlight } from './useSpotlight'

/* ----------------- 类型定义 ----------------- */
export interface SpotlightAction {
  id: string | number
  title: string
  description?: string
  icon?: string
  onTrigger: () => void
}

/* ----------------- props / emit ----------------- */
export interface SpotlightProps {
  actions?: SpotlightAction[]
  placeholder?: string
  emptyText?: string
}
const props = withDefaults(defineProps<SpotlightProps>(), {
  actions: () => [],
  placeholder: '搜索...',
  emptyText: '未找到结果'
})

const emit = defineEmits<{
  open: []
  close: []
}>()

/* ----------------- 响应式状态 ----------------- */
const {
  visible,
  searchQuery,
  activeIndex,
  searchInput,
  open,
  close
} = useSpotlight({
  onOpen: () => emit('open'),
  onClose: () => emit('close')
})
const actionEls = ref<(HTMLElement | null)[]>([])

// Fuse 实例
let fuseForChinese: Fuse<SpotlightAction>
let fuseForEnglish: Fuse<SpotlightAction>

/* ----------------- 计算属性 ----------------- */
const filteredActions = computed(() => {
  const q = searchQuery.value.trim()
  if (!q) return props.actions

  const fuse = hasChinese(q) ? fuseForChinese : fuseForEnglish
  const results = fuse.search(q)

  // 英文单字母过滤
  if (isEnglish(q)) {
    results.forEach(r => {
      r.matches = r.matches!
        .map(m => ({
          ...m,
          indices: m.indices.filter(([s, e]) => {
            const txt = r.item[m.key as keyof SpotlightAction] as string
            const match = txt.slice(s, e + 1)
            return !(isEnglish(match) && match.length === 1)
          })
        }))
        .filter(m => m.indices.length > 0)
    })
  }

  return results.map(r => ({ ...r.item, matches: r.matches }))
})

/* ----------------- 生命周期 ----------------- */
onMounted(() => {
  initFuse()
  window.addEventListener('keydown', handleShortcut)
  searchInput.value?.focus()
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleShortcut)
})

/* ----------------- 侦听器 ----------------- */
watch(() => props.actions, initFuse, { deep: true })
watch(() => activeIndex.value, () => {
  nextTick(() => {
    const target = actionEls.value[activeIndex.value]
    console.log("🚀 ~ target:", target)
    target?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  })
})

/* ----------------- 工具函数 ----------------- */
function hasChinese(str: string) {
  return /[\u4e00-\u9fa5]/.test(str)
}
function isEnglish(str: string) {
  return /^[a-zA-Z\s]+$/.test(str)
}
function mergeRanges(ranges: [number, number][]) {
  if (!ranges.length) return []
  const sorted = [...ranges].sort((a, b) => a[0] - b[0])
  const merged: [number, number][] = [sorted[0]]
  for (let i = 1; i < sorted.length; i++) {
    const cur = sorted[i]
    const last = merged[merged.length - 1]
    if (cur[0] <= last[1] + 1) {
      last[1] = Math.max(last[1], cur[1])
    } else {
      merged.push(cur)
    }
  }
  return merged
}

/* ----------------- 业务方法 ----------------- */
function initFuse() {
  const base: IFuseOptions<SpotlightAction> = {
    keys: ['title', 'description'],
    includeMatches: true,
    findAllMatches: true,
    ignoreLocation: true,
    useExtendedSearch: true,
    isCaseSensitive: false
  }
  fuseForChinese = new Fuse(props.actions, { ...base, threshold: 0.6, minMatchCharLength: 1 })
  fuseForEnglish = new Fuse(props.actions, { ...base, threshold: 0.2, minMatchCharLength: 2, isCaseSensitive: false })
}

function handleShortcut(e: KeyboardEvent) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    visible.value ? close() : open()
  }
}

function setActionRef(el: any, idx: number) {
  if (el) actionEls.value[idx] = el
}
function navigateUp() {
  const max = filteredActions.value.length - 1
  activeIndex.value = activeIndex.value > 0 ? activeIndex.value - 1 : max
}
function navigateDown() {
  const max = filteredActions.value.length - 1
  activeIndex.value = activeIndex.value < max ? activeIndex.value + 1 : 0
}

function triggerAction() {
  const action = filteredActions.value[activeIndex.value]
  if (action && action.onTrigger) {
    action.onTrigger()
    close()
  }
}
function triggerActionByIndex(index: number) {
  activeIndex.value = index
  triggerAction()
}

function handleEnter(e: KeyboardEvent) {
  if (e.isComposing) return
  triggerAction()
}

function highlightText(text: string, fieldName: keyof SpotlightAction, action: any) {
  if (!searchQuery.value || !text) return text
  if (!action.matches) return text
  const fieldMatches = action.matches.filter((m: any) => m.key === fieldName)
  if (!fieldMatches.length) return text
  const highlights = fieldMatches.reduce((acc: any[], m: any) => [...acc, ...m.indices], [])
  const merged = mergeRanges(highlights)
  let res = text
  for (let i = merged.length - 1; i >= 0; i--) {
    const [s, e] = merged[i]
    res = res.slice(0, s) + `<span class="h-spotlight-highlight">${res.slice(s, e + 1)}</span>` + res.slice(e + 1)
  }
  return res
}
</script>
