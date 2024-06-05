import { RootLayout, Sidebar, Content } from '@/components'
import { DraggableTopBar } from './components/DraggableTopBar'
import { ActionButtonRow } from '@/components'
import { NotePreviewList } from '@/components'

export default function App() {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonRow className="flex mt-1 justify-between mb-1" />
          <NotePreviewList className="mt-3 space-y-1" />
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">Content</Content>
      </RootLayout>
    </>
  )
}
