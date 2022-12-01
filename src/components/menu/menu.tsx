import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MENU_ITEMS, EXTERNAL_ITEMS } from 'constants/menuConstants'
import SideMenu from './sideMenu'
import { FiMenu } from 'react-icons/fi'
import HomeIcon from './homeIcon'

const ICON_SIZE = 28

const MenuItems = () => {
  const { asPath } = useRouter()
  return (
    <ul className="flex-row hidden sm:flex">
      {MENU_ITEMS.map((item) => (
        <li
          key={item.link}
          className={`mx-2 flex items-center cursor-pointer ${
            asPath === item.link ? 'font-bold' : 'font-normal'
          }`}
          title={item.name}
        >
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

const ExternalItems = () => {
  return (
    <ul className="flex flex-row">
      {EXTERNAL_ITEMS.map((item, index) => {
        if (item?.link) {
          return (
            <li
              key={`${item?.link ?? '' + index}`}
              className="flex items-center mx-2 font-normal cursor-pointer"
              title={item?.title ?? item.name}
            >
              <a href={item?.link ?? ''}>{item.name}</a>
            </li>
          )
        }
      })}
    </ul>
  )
}

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <nav>
      <div className="flex flex-row items-center justify-between w-full mx-auto max-w-7xl">
        <HomeIcon />
        <div className="flex flex-row items-center">
          <MenuItems />
          <ExternalItems />
          <div className="flex ml-2 sm:hidden place-content-center">
            <button type="button" onClick={handleToggleMenu}>
              <FiMenu
                size={ICON_SIZE}
                style={{ color: '#0F0E40', marginRight: '1rem' }}
              />
            </button>
          </div>
          <SideMenu handleToggleMenu={handleToggleMenu} showMenu={showMenu} />
        </div>
      </div>
    </nav>
  )
}

export default Menu
