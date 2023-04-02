import { RxDiscordLogo, RxGithubLogo, RxReader } from 'react-icons/rx'

const ICON_SIZE = 20
const DISCORD_LINK = process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK
const DOCS_LINK = process.env.NEXT_PUBLIC_DOCS_LINK

export const MENU_ITEMS = [
  { label: 'Juno', href: '/juno' },
  { label: 'Principals', href: '/principals' },
  { label: 'For Developers', href: '/developers' },
  { label: 'About', href: '/about' },
]

export const EXTERNAL_ITEMS = [
  {
    label: <RxGithubLogo size={ICON_SIZE} />,
    href: 'https://github.com/Elysium-Labs-EU',
    title: 'Github',
  },
  {
    label: <RxReader size={ICON_SIZE} />,
    href: DOCS_LINK,
    title: 'Docs',
  },
  {
    label: <RxDiscordLogo size={ICON_SIZE} />,
    href: DISCORD_LINK,
    title: 'Discord',
  },
]
