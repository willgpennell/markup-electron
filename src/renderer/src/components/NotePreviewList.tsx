import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'
import { twMerge } from 'tailwind-merge'

export function NotePreviewList({ className, ...props }: ComponentProps<'ul'>) {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No notes!</span>
      </ul>
    )
  }

  return (
    <ul {...props}>
      {/** this is essentially a for loop for all elements within the notesMock array, except it applies each element to a <ul> */}
      {notesMock.map((note) => (
        /** this takes in note.title as a key and all attributes from note as props (title and last edit time)*/
        <NotePreview key={note.title + note.lastEditTime} {...note}></NotePreview>
      ))}
    </ul>
  )
}
