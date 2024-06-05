import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in BrowserWindow for security reasons')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // passes in locale into the renderer from navigator API
    locale: navigator.language,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  })
} catch (error) {
  console.error(error)
}
