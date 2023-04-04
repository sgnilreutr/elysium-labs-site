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
    <nav className="w-full min-w-[320px]">
      <div className="flex flex-row items-center justify-between mx-auto md:w-full max-w-7xl">
        <HomeIcon />
        <Stack align="center" className="!gap-6 md:gap-3">
          <div className="hidden md:inline">
            <MenuItems menuItems={MENU_ITEMS} />
          </div>
          <MenuItems menuItems={EXTERNAL_ITEMS} />
          <div className="flex md:hidden place-content-center">
            <button type="button" onClick={handleToggleMenu}>
              <FiMenu size={ICON_SIZE} />
            </button>
          </div>
          <SideMenu handleToggleMenu={handleToggleMenu} showMenu={showMenu}>
            <div className="flex items-end justify-center flex-1 pb-12">
              <MenuItems menuItems={EXTERNAL_ITEMS} />
            </div>
          </SideMenu>
        </Stack>
      </div>
    </nav>
  )
}

export default Menu
