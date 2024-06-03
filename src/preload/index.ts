import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in BrowserWindow for security reasons')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error) {
  console.error(error)
}
