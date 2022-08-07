import { FaGithub, FaSlack } from 'react-icons/fa'

const ICON_SIZE = 20

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
    link: 'https://join.slack.com/t/slack-pfs5354/shared_invite/zt-1dnnwr9wn-njkaaxES_sUWywV2~JANjg',
    title: 'Slack',
  },
]
