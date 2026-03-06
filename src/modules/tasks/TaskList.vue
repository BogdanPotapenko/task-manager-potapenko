<template>
  <ul class="task-list">
    <li v-for="task in tasks" :key="task.id" :class="{ completed: task.completed }">
      <input type="checkbox" :checked="task.completed" @change="toggle(task.id)" />
      <span class="title">{{ task.title }}</span>
      <span class="priority" :class="task.priority">{{ task.priority }}</span>
      <button @click="remove(task.id)">Delete</button>
    </li>
  </ul>
</template>

<script setup>
import { taskStore } from './taskStore'

defineProps({
  tasks: {
    type: Array,
    required: true,
  },
})

function toggle(id) {
  taskStore.toggleTask(id)
}

function remove(id) {
  taskStore.removeTask(id)
}
</script>
