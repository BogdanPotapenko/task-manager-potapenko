import { describe, it, expect } from 'vitest'
import { validateTask } from './validate.js'

describe('validateTask', () => {
  it('should return valid for correct input', () => {
    const result = validateTask('Buy groceries', 'high')
    expect(result.valid).toBe(true)
    expect(result.errors).toHaveLength(0)
  })

  it('should return error for empty title', () => {
    const result = validateTask('', 'medium')
    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Title is required')
  })

  it('should return error for non-string title', () => {
    const result = validateTask(123, 'medium')
    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Title is required')
  })

  it('should return error for invalid priority', () => {
    const result = validateTask('Test task', 'urgent')
    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Invalid priority value')
  })

  it('should return error for title exceeding max length', () => {
    const longTitle = 'a'.repeat(101)
    const result = validateTask(longTitle, 'low')
    expect(result.valid).toBe(false)
    expect(result.errors).toContain('Title must be 100 characters or less')
  })
})
