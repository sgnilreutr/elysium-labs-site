import type { MenuItems } from '../menu/MenuTypes'
import MenuItem from './MenuItem'

interface MenuItemsProps {
  menuItems: MenuItems
}

const MenuItemsComponent = ({ menuItems }: MenuItemsProps) => {
  return (
    <ul className="flex flex-row gap-6 sm:flex">
      {menuItems.map(({ label, icon, title, href }, index) => (
        <MenuItem
          href={href}
          icon={icon}
          key={index}
          label={label}
          title={title}
        />
      ))}
    </ul>
  )
}

export default MenuItemsComponent
