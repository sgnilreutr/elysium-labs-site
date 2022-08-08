import { FaGithub, FaSlack } from 'react-icons/fa'

const ICON_SIZE = 20
const SLACK_LINK = process.env.NEXT_PUBLIC_SLACK_INVITE_LINK

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
    name: <FaSlack size={ICON_SIZE} />,
    link: SLACK_LINK,
    title: 'Slack',
  },
]
