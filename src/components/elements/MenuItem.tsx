import Link from 'next/link'
import { usePathname } from 'next/navigation'

import classNames from '@/lib/classNames'
import isUrl from '@/lib/isUrl'

import type { MenuItem } from '../menu/MenuTypes'

const LabelIcon = ({ icon, label }: Pick<MenuItem, 'icon' | 'label'>) => {
  return icon ? (
    <span className="flex flex-row items-center gap-3">
      {icon}
      {label}
    </span>
  ) : (
    <span>{label}</span>
  )
}

const MenuItemComponent = ({ href, icon, label, title }: MenuItem) => {
  const pathname = usePathname()
  if (!href) {
    // If there is no link, do not render the menu item.
    return null
  }
  const isExternal = isUrl(href)
  const isActive = href === pathname

  return (
    <li
      className={classNames(
        `flex items-center cursor-pointer ${
          isActive ? 'opacity-100' : 'opacity-50 hover:opacity-100'
        }`
      )}
      title={title}
    >
      {isExternal ? (
        <a href={href}>
          <LabelIcon icon={icon} label={label} />
        </a>
      ) : (
        <Link href={href}>
          <LabelIcon icon={icon} label={label} />
        </Link>
      )}
    </li>
  )
}

export default MenuItemComponent
