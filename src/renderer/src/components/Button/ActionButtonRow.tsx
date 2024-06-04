import React, { ComponentProps } from 'react'
import { NewNoteButton } from '@/components'
import { DeleteNoteButton } from '@/components'

export function ActionButtonRow({ ...props }: ComponentProps<'div'>) {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
