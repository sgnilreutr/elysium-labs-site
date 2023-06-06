import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiX } from 'react-icons/fi'

import { MENU_ITEMS } from '@/components/menu/MenuConstants'

import HomeIcon from './HomeIcon'
import classNames from '@/lib/classNames'
import type { ReactNode } from 'react'

const ICON_SIZE = 28

interface SideMenuProps {
  children: ReactNode
  handleToggleMenu: () => void
  showMenu: boolean
}

const SideMenu = ({ children, handleToggleMenu, showMenu }: SideMenuProps) => {
  const { asPath } = useRouter()

  return (
    <aside
      className={classNames(
        'z-[100] fixed p-4 w-full bg-gray-200/95 h-[100vdh] flex flex-col',
        `${showMenu ? 'bottom-0 left-0' : '-bottom-full -left-full'}`,
        'transition-[bottom] backdrop-blur-xl border-b border-gray-300'
      )}
    >
      <div
        className={classNames(
          'flex flex-row justify-between transition-opacity',
          `${showMenu ? 'opacity-100' : 'opacity-0'}`,
          'duration-[1200ms]'
        )}
      >
        <HomeIcon />
        <button type="button" onClick={handleToggleMenu}>
          <FiX size={ICON_SIZE} />
        </button>
      </div>
      <div className="pt-10">
        <ul className="flex flex-col gap-6">
          {MENU_ITEMS.map(({ href, label }) => (
            <li
              key={href}
              className={classNames(
                'flex items-center cursor-pointer',
                `${asPath === href ? 'font-bold' : 'font-normal'}`,
                'text-2xl'
              )}
              title={label}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </aside>
  )
}

export default SideMenu
