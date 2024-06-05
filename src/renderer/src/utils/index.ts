import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// defines a new Intl.DateTimeFormat obj with certain options which allows formatting of milliseconds to datetime
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

// function that accepts ms variable of type number and formats it according to the dateFormatter obj defined above
export function formatDateFromMs(ms: number) {
  return dateFormatter.format(ms)
}

// ???
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(...args))
}
