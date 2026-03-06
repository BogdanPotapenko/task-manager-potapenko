import { reactive } from 'vue'

export const taskStore = reactive({
  tasks: [],
  nextId: 1,

  addTask(title, priority) {
    this.tasks.push({
      id: this.nextId++,
      title,
      priority: priority || 'medium',
      completed: false,
      createdAt: new Date().toISOString(),
    })
  },

  removeTask(id) {
    const index = this.tasks.findIndex((t) => t.id === id)
    if (index !== -1) {
      this.tasks.splice(index, 1)
    }
  },

  toggleTask(id) {
    const task = this.tasks.find((t) => t.id === id)
    if (task) {
      task.completed = !task.completed
    }
  },

  getFilteredTasks(filter) {
    if (filter === 'completed') return this.tasks.filter((t) => t.completed)
    if (filter === 'active') return this.tasks.filter((t) => !t.completed)
    return this.tasks
  },
})
