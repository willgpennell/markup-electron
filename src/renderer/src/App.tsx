import { RootLayout, Sidebar, Content } from '@/components'
import { DraggableTopBar } from './components/DraggableTopBar'

export default function App() {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">Sidebar</Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}
