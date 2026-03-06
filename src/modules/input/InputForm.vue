<template>
  <form class="input-form" @submit.prevent="handleSubmit">
    <input v-model="title" type="text" placeholder="Task title..." />
    <select v-model="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button type="submit">Add Task</button>
    <ul v-if="errors.length" class="errors">
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { taskStore } from '../tasks/taskStore'
import { validateTask } from '../validation/validate'

const title = ref('')
const priority = ref('medium')
const errors = ref([])

function handleSubmit() {
  const result = validateTask(title.value, priority.value)
  errors.value = result.errors

  if (result.valid) {
    taskStore.addTask(title.value.trim(), priority.value)
    title.value = ''
    priority.value = 'medium'
  }
}
</script>
