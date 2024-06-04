import { ComponentProps } from 'react'
import { ActionButton } from '@/components'
import { FaRegTrashCan } from 'react-icons/fa6'

export function DeleteNoteButton({ className, children, ...props }: ComponentProps<'button'>) {
  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
