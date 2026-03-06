import { reactive, computed } from 'vue'
import { logInfo, logWarn } from '../logging/logger.js'

function createTask(id, title, priority) {
  return {
    id,
    title,
    priority: priority || 'medium',
    completed: false,
    createdAt: new Date().toISOString(),
  }
}

function findTaskIndex(tasks, id) {
  return tasks.findIndex((t) => t.id === id)
}

export const taskStore = reactive({
  tasks: [],
  nextId: 1,
  filter: 'all',

  addTask(title, priority) {
    const task = createTask(this.nextId++, title, priority)
    this.tasks.push(task)
    logInfo(`Task added: "${title}" with priority ${priority}`)
    return task
  },

  removeTask(id) {
    const index = findTaskIndex(this.tasks, id)
    if (index !== -1) {
      this.tasks.splice(index, 1)
      logInfo(`Task removed: id=${id}`)
    } else {
      logWarn(`Task not found for removal: id=${id}`)
    }
  },

  toggleTask(id) {
    const index = findTaskIndex(this.tasks, id)
    if (index !== -1) {
      this.tasks[index].completed = !this.tasks[index].completed
      logInfo(`Task toggled: id=${id}, completed=${this.tasks[index].completed}`)
    }
  },

  setFilter(value) {
    this.filter = value
  },

  get filteredTasks() {
    if (this.filter === 'completed') return this.tasks.filter((t) => t.completed)
    if (this.filter === 'active') return this.tasks.filter((t) => !t.completed)
    return this.tasks
  },

  get stats() {
    return {
      total: this.tasks.length,
      completed: this.tasks.filter((t) => t.completed).length,
      active: this.tasks.filter((t) => !t.completed).length,
    }
  },
})
