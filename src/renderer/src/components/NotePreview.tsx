import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'

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
  return <div {...props}>NotePreviewProps</div>
}
