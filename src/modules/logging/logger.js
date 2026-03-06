const LOG_LEVELS = ['info', 'warn', 'error']

const LEVEL_STYLES = {
  info: 'color: #2196F3',
  warn: 'color: #FF9800',
  error: 'color: #F44336; font-weight: bold',
}

function formatMessage(level, message) {
  const timestamp = new Date().toISOString()
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`
}

export function log(level, message) {
  if (!LOG_LEVELS.includes(level)) {
    level = 'info'
  }
  const style = LEVEL_STYLES[level]
  console.log(`%c${formatMessage(level, message)}`, style)
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
