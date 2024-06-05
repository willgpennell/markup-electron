import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'

export function NotePreviewList({ ...props }: ComponentProps<'ul'>) {
  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <NotePreview key={note.title} {...note}></NotePreview>
      ))}
    </ul>
  )
}
