const VALID_PRIORITIES = ['low', 'medium', 'high']
const MAX_TITLE_LENGTH = 100

export function validateTask(title, priority) {
  const errors = []

  if (title.trim().length === 0) {
    errors.push('Title is required')
  }

  if (typeof title === 'string' && title.trim().length > MAX_TITLE_LENGTH) {
    errors.push(`Title must be ${MAX_TITLE_LENGTH} characters or less`)
  }

  if (!VALID_PRIORITIES.includes(priority)) {
    errors.push('Invalid priority value')
  }

  return {
    valid: errors.length === 0,
    errors,
  }
}
