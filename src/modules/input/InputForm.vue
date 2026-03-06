<template>
  <form class="input-form" @submit.prevent="handleSubmit">
    <input v-model="title" type="text" placeholder="Task title..." />
    <select v-model="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>
    <button type="submit">Add Task</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { taskStore } from '../tasks/taskStore'

const title = ref('')
const priority = ref('medium')

function handleSubmit() {
  if (title.value.trim()) {
    taskStore.addTask(title.value.trim(), priority.value)
    title.value = ''
    priority.value = 'medium'
  }
}
</script>
