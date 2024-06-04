import { ComponentProps } from 'react'
import { ActionButton } from './ActionButton'
import { LuFileSignature } from 'react-icons/lu'

export function NewNoteButton({ className, children, ...props }: ComponentProps<'button'>) {
  return (
    <ActionButton {...props}>
      <LuFileSignature className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
