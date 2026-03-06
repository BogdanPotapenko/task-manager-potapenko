<template>
  <div id="app">
    <h1>Task Manager</h1>
    <InputForm />
    <TaskList :tasks="taskStore.tasks" />
  </div>
</template>

<script setup>
import { taskStore } from './modules/tasks/taskStore'
import TaskList from './modules/tasks/TaskList.vue'
import InputForm from './modules/input/InputForm.vue'
</script>
