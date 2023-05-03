import type { TMenuItems } from '../menu/MenuTypes'
import MenuItem from './MenuItem'

interface IMenuItems {
  menuItems: TMenuItems
}

const MenuItems = ({ menuItems }: IMenuItems) => {
  return (
    <ul className="flex flex-row gap-6 sm:flex">
      {menuItems.map(({ label, icon, title, href }) => (
        <MenuItem
          href={href}
          icon={icon}
          key={href}
          label={label}
          title={title}
        />
      ))}
    </ul>
  )
}

export default MenuItems
