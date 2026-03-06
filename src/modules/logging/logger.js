const LOG_LEVELS = ['info', 'warn', 'error']

function formatMessage(level, message) {
  const timestamp = new Date().toISOString()
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`
}

export function log(level, message) {
  if (!LOG_LEVELS.includes(level)) {
    level = 'info'
  }
  console.log(formatMessage(level, message))
}

export function logInfo(message) {
  log('info', message)
}

export function logWarn(message) {
  log('warn', message)
}

export function logError(message) {
  log('error', message)
}
