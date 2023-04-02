import { useState } from 'react'
import { FiMenu } from 'react-icons/fi'

import MenuItems from '../elements/MenuItems'
import Stack from '../elements/Stack'
import HomeIcon from './HomeIcon'
import { EXTERNAL_ITEMS, MENU_ITEMS } from './MenuConstants'
import SideMenu from './SideMenu'

const ICON_SIZE = 28

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleToggleMenu = () => {
    setShowMenu((prevState) => !prevState)
  }

  return (
    <nav>
      <div className="flex flex-row items-center justify-between w-full mx-auto max-w-7xl">
        <HomeIcon />
        <Stack align="center">
          <MenuItems menuItems={MENU_ITEMS} />
          <MenuItems menuItems={EXTERNAL_ITEMS} />
          <div className="flex ml-2 sm:hidden place-content-center">
            <button type="button" onClick={handleToggleMenu}>
              <FiMenu
                size={ICON_SIZE}
                style={{ color: '#0F0E40', marginRight: '1rem' }}
              />
            </button>
          </div>
          <SideMenu handleToggleMenu={handleToggleMenu} showMenu={showMenu} />
        </Stack>
      </div>
    </nav>
  )
}

export default Menu
