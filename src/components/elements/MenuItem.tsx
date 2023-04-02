import Link from 'next/link'
import { useRouter } from 'next/router'

import classNames from '@/lib/classNames'

import isUrl from '@/lib/isUrl'
import type { IMenuItem } from '../menu/MenuTypes'

const LabelIcon = ({ icon, label }: Pick<IMenuItem, 'icon' | 'label'>) => {
  return icon ? (
    <span className="flex flex-row items-center gap-3">
      {icon}
      {label}
    </span>
  ) : (
    <span>{label}</span>
  )
}

const MenuItem = ({ href, icon, label, title }: IMenuItem) => {
  const { asPath } = useRouter()
  if (!href) {
    // If there is no link, do not render the menu item.
    return null
  }
  const isExternal = isUrl(href)
  const isActive = href === asPath

  return (
    <li
      className={classNames(
        `flex items-center cursor-pointer ${
          isActive ? 'font-bold' : 'font-normal'
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

export default MenuItem
