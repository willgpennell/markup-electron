import { cn } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'
import { formatDateFromMs } from '@renderer/utils'

/**
 * defines the shape of the props that will be passed into NotePreview, so the props will include NoteInfo,
 * an optional isActive prop (? means optional) and props that will acceptable by the div element for styling
 */
export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export function NotePreview({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
    </div>
  )
}
