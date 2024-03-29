import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'
import { FiX } from 'react-icons/fi'

import { MENU_ITEMS } from '@/components/menu/MenuConstants'
import classNames from '@/lib/classNames'

import HomeIcon from './HomeIcon'

const ICON_SIZE = 28

interface SideMenuProps {
  children: ReactNode
  handleToggleMenu: () => void
  showMenu: boolean
}

const SideMenu = ({ children, handleToggleMenu, showMenu }: SideMenuProps) => {
  const pathname = usePathname()

  return (
    <aside
      className={classNames(
        'z-[100] fixed p-4 w-full bg-gray-200/95 h-dynamic-screen flex flex-col',
        showMenu ? 'bottom-0 left-0' : '-bottom-full -left-full',
        'transition-[bottom] backdrop-blur-xl border-b border-gray-300'
      )}
    >
      <div className="pt-[50%] flex flex-1">
        <ul className="flex flex-col gap-6">
          {MENU_ITEMS.map(({ href, label }) => {
            const isActive = href === pathname
            return (
              <li
                key={href}
                className={classNames(
                  'flex items-center cursor-pointer',
                  isActive ? 'opacity-100' : 'opacity-50',
                  'text-2xl'
                )}
                title={label}
              >
                <Link href={href}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div
        className={classNames(
          'flex flex-row items-center justify-between transition-opacity',
          showMenu ? 'opacity-100' : 'opacity-0',
          'duration-[1200ms]'
        )}
      >
        <HomeIcon />
        {children}
        <button type="button" onClick={handleToggleMenu}>
          <FiX size={ICON_SIZE} />
        </button>
      </div>
    </aside>
  )
}

export default SideMenu
