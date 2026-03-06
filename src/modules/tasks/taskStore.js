import { reactive } from 'vue'

export const taskStore = reactive({
  tasks: [],
  nextId: 1,
})
