import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiX } from 'react-icons/fi'

import { MENU_ITEMS } from '@/components/menu/MenuConstants'

import HomeIcon from './HomeIcon'

const ICON_SIZE = 28

const SideMenu = ({
  handleToggleMenu,
  showMenu,
}: {
  handleToggleMenu: () => void
  showMenu: boolean
}) => {
  const { asPath } = useRouter()

  return (
    <aside
      className={`z-[100] fixed p-4 w-full bg-gray-200/80 ${
        showMenu ? 'top-0 left-0' : '-top-full -left-full'
      } transition-[top] backdrop-blur-lg border-b border-gray-300`}
    >
      <div
        className={`flex flex-row justify-between transition-opacity ${
          showMenu ? 'opacity-100' : 'opacity-0'
        } duration-[1200ms]`}
      >
        <HomeIcon />
        <button type="button" onClick={handleToggleMenu}>
          <FiX
            size={ICON_SIZE}
            style={{ color: '#0F0E40', marginRight: '1rem' }}
          />
        </button>
      </div>
      <div>
        <ul className="flex flex-col mt-4">
          {MENU_ITEMS.map(({ href, label }) => (
            <li
              key={href}
              className={`my-2 flex items-center cursor-pointer ${
                asPath === href ? 'font-bold' : 'font-normal'
              }`}
              title={label}
            >
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SideMenu
