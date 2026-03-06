<template>
  <div id="app">
    <h1>Task Manager</h1>
    <InputForm />
    <div class="filters">
      <button @click="taskStore.setFilter('all')">All ({{ taskStore.stats.total }})</button>
      <button @click="taskStore.setFilter('active')">Active ({{ taskStore.stats.active }})</button>
      <button @click="taskStore.setFilter('completed')">Completed ({{ taskStore.stats.completed }})</button>
    </div>
    <TaskList :tasks="taskStore.filteredTasks" />
  </div>
</template>

<script setup>
import { taskStore } from './modules/tasks/taskStore'
import TaskList from './modules/tasks/TaskList.vue'
import InputForm from './modules/input/InputForm.vue'
</script>
