<template>
  <div
    ref="renderTextarea"
    class="screenshots-textarea"
    contenteditable="true"
    spellcheck="false"
    :style="{
      transform: `translate(${props.x - 12}px, ${props.y - 11}px)`,
      fontSize: `${props.size}px`,
      color: props.color,
      cursor: props.cursor
    }"
    @mousedown="onMousedown"
    @focus="onFocus"
    @blur="onBlur"
  >{{ props.value }}</div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

interface Props {
  x: number
  y: number
  size: number
  color: string
  value: string
  cursor: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  mousedown: [event: MouseEvent]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const renderTextarea = ref<HTMLElement | null>(null)

onMounted(() => {
  nextTick(() => {
    if (!props.value && renderTextarea.value) {
      setCaretToEnd(renderTextarea.value)
    }
  })
})

function setCaretToEnd(element: HTMLElement) {
  if (!element.firstChild) {
    const textNode = document.createTextNode('')
    element.appendChild(textNode)
  }

  const range = document.createRange()
  const selection = window.getSelection()

  if (!selection) return

  range.setStart(element.firstChild!, 0)
  range.collapse(true)

  selection.removeAllRanges()
  selection.addRange(range)

  element.focus()
}

function onMousedown(e: MouseEvent) {
  emit('mousedown', e)
}

function onFocus(e: FocusEvent) {
  emit('focus', e)
}

function onBlur(e: FocusEvent) {
  emit('blur', e)
}
</script>

<style scoped>
.screenshots-textarea {
  position: absolute;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.4;
  min-width: 50px;
  min-height: 20px;
  max-width: 300px;
  outline: none;
  user-select: text;
  cursor: text;
  padding: 2px 4px;
  background: transparent;
  border-radius: 2px;
  overflow-wrap: break-word;
  -webkit-user-modify: read-write-plaintext-only;
}

.screenshots-textarea:focus {
  outline: 1px dashed rgba(0, 0, 0, 0.3);
}

.screenshots-textarea:empty::before {
  content: attr(placeholder);
  color: rgba(0, 0, 0, 0.3);
}
</style>
