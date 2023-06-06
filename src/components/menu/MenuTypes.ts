import type { ReactNode } from 'react'

export interface MenuItem {
  href: string | undefined
  icon?: ReactNode
  label: ReactNode
  title?: string
}

export type MenuItems = Array<MenuItem>
