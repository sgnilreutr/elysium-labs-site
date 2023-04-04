import type { ReactNode } from 'react'

export interface IMenuItem {
  href: string | undefined
  icon?: ReactNode
  label: ReactNode
  title?: string
}

export type TMenuItems = Array<IMenuItem>
