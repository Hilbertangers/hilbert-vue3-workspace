import { nextTick, ref } from 'vue'
const visible = ref(false)
const searchQuery = ref('')
const activeIndex = ref(0)
const searchInput = ref<HTMLInputElement>()

export function useSpotlight(
  options: {
    onOpen?: () => void
    onClose?: () => void
  } = {}
) {
  function open() {
    visible.value = true
    searchQuery.value = ''
    activeIndex.value = 0
    nextTick(() => {
      searchInput.value!.focus()
      options.onOpen?.()
    })
  }
  function close() {
    visible.value = false
    options.onClose?.()
  }
  return {
    visible,
    searchQuery,
    activeIndex,
    searchInput,
    open,
    close,
  }
}
