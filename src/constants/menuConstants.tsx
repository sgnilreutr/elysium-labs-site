import { FaGithub, FaDiscord } from 'react-icons/fa'

const ICON_SIZE = 20
const DISCORD_LINK = process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK

export const MENU_ITEMS = [
  { name: 'Juno', link: '/juno' },
  { name: 'Principals', link: '/principals' },
  { name: 'For developers', link: '/developers' },
  { name: 'About', link: '/about' },
]

export const EXTERNAL_ITEMS = [
  {
    name: <FaGithub size={ICON_SIZE} />,
    link: 'https://github.com/Elysium-Labs-EU',
    title: 'Github',
  },
  {
    name: <FaDiscord size={ICON_SIZE} />,
    link: DISCORD_LINK,
    title: 'Discord',
  },
]
