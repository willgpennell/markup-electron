import { RootLayout, Sidebar, Content } from '@/components'
import { DraggableTopBar } from './components/DraggableTopBar'
import { ActionButtonRow } from '@/components'

export default function App() {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}
