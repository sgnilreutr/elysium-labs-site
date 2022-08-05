import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/30x30_EL_01.jpg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaGithub } from 'react-icons/fa'

const MENU_ITEMS = [
  { name: 'Juno', link: '/juno' },
  { name: 'Principals', link: '/principals' },
  { name: 'For developers', link: '/developers' },
  { name: 'About', link: '/about' },
  { name: <FaGithub />, link: 'https://github.com/Elysium-Labs-EU' },
]

const MenuItems = () => {
  const { asPath } = useRouter()
  return (
    <ul className="flex flex-row">
      {MENU_ITEMS.map((item) => (
        <li
          key={item.link}
          className={`mx-2 flex items-center cursor-pointer ${
            asPath === item.link ? 'font-bold' : 'font-normal'
          }`}
        >
          <Link href={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  )
}

const COMPANY_TITLE1 = 'Elysium '
const COMPANY_TITLE2 = 'Labs'

const Menu = () => {
  return (
    <nav>
      <div className="max-w-7xl w-full mx-auto flex flex-row justify-between items-center">
        <Link href="/">
          <div className="flex flex-row items-center cursor-pointer">
            <>
              <Image
                src={Logo}
                alt="Elysium Labs"
                style={{ borderRadius: '5px' }}
              />
              <span className="ml-2">
                {COMPANY_TITLE1}
                <span style={{ fontWeight: '600' }}>{COMPANY_TITLE2}</span>
              </span>
            </>
          </div>
        </Link>
        <MenuItems />
      </div>
    </nav>
  )
}

export default Menu
