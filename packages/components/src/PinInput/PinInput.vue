<template>
  <div class="h-pin-input" :class="{ 'is-disabled': disabled }">
    <input
      v-for="(_, idx) in length"
      :key="idx"
      :ref="(el) => (inputRefs[idx] = el as HTMLInputElement)"
      :value="values[idx]"
      class="h-pin-input__field"
      :type="inputType"
      :inputmode="inputMode"
      :pattern="inputPattern"
      :disabled="disabled"
      :maxlength="1"
      @input="handleInput($event, idx)"
      @keydown="handleKeyDown($event, idx)"
      @compositionstart="handleCompositionStart"
      @compositionend="handleCompositionEnd($event, idx)"
      @paste="handlePaste"
      @focus="handleFocus(idx)"
    />
  </div>
</template>
<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
export interface PinInputProps {
  length?: number
  type?: 'text' | 'number' | 'password'
  disabled?: boolean
  modelValue?: string
}
const props = withDefaults(defineProps<PinInputProps>(), {
  length: 4,
  type: 'text',
  disabled: false,
  modelValue: ''
})
const emit = defineEmits<{
  'update:modelValue': [val: string]
  complete: [val: string]
}>()
/* -------------------------- 内部状态 -------------------------- */
const values = ref<string[]>(Array(props.length).fill(''))
const inputRefs = ref<HTMLInputElement[]>([])
const isComposing = ref(false)
/* -------------------------- 计算属性 ---------------------------- */
const inputType = computed(() =>
  props.type === 'number' ? 'tel' : props.type
)
const inputMode = computed<'numeric' | 'text'>(() =>
  props.type === 'number' ? 'numeric' : 'text'
)
const inputPattern = computed(() =>
  props.type === 'number' ? '[0-9]*' : '[a-zA-Z0-9]*'
)
/* -------------------------- 工具函数 ---------------------------- */
function validateInput(input: string) {
  if (!input) return ''
  const reg = props.type === 'number' ? /^\d$/ : /^[a-zA-Z0-9]$/
  return reg.test(input) ? input.slice(-1) : ''
}
/* -------------------------- 同步 prop -> values ---------------- */
watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    const chars = newValue.split('')
    values.value = Array(props.length).fill('').map((_, i) => chars[i] || '')
  }
}, { immediate: true })
watch(() => values.value.join(''), (joined) => {
  if (joined.length === props.length) {
    emit('update:modelValue', joined)
    emit('complete', joined)
  }
})
/* -------------------------- Event Handlers -------------------- */
function handleInput(e: Event, index: number) {
  if (isComposing.value) return
  const value = validateInput((e.target as HTMLInputElement).value)
  values.value[index] = value
  nextTick(() => {
    const el = inputRefs.value[index]
    el.value = value
    if (value && index < props.length - 1) {
      inputRefs.value[index + 1]?.focus()
    }
  })
}
function handleCompositionStart() {
  isComposing.value = true
}
function handleCompositionEnd(e: Event, index: number) {
  isComposing.value = false
  handleInput(e, index)
}
function handleKeyDown(e: KeyboardEvent, index: number) {
  switch (e.key) {
    case 'Backspace':
      e.preventDefault()
      if (values.value[index]) {
        values.value[index] = ''
      } else if (index > 0) {
        values.value[index - 1] = ''
        inputRefs.value[index - 1]?.focus()
      }
      break
    case 'ArrowLeft':
      e.preventDefault()
      inputRefs.value[index - 1]?.focus()
      break
    case 'ArrowRight':
      e.preventDefault()
      inputRefs.value[index + 1]?.focus()
      break
  }
}
function handlePaste(e: ClipboardEvent) {
  e.preventDefault()
  const text = e.clipboardData?.getData('text') ?? ''
  const valid = [...text].filter((c) =>
    props.type === 'number'
      ? /\d/.test(c)
      : /[a-zA-Z0-9]/.test(c)
  )
  valid.slice(0, props.length).forEach((c, i) => {
    values.value[i] = c
  })
  nextTick(() => {
    const nextIdx = values.value.findIndex((v) => !v)
    if (nextIdx !== -1) inputRefs.value[nextIdx]?.focus()
  })
}
function handleFocus(index: number) {
  if (props.disabled) return
  const firstEmpty = values.value.findIndex((v) => !v)
  if (firstEmpty !== -1 && index > firstEmpty) {
    nextTick(() => {
      const el = inputRefs.value[firstEmpty]
      el?.focus()
      el?.select()
    })
    return
  }
  nextTick(() => inputRefs.value[index]?.select())
}
</script>
