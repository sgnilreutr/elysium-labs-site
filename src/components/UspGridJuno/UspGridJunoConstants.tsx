import { BsKeyboard } from 'react-icons/bs'
import { FiCheckCircle, FiArchive } from 'react-icons/fi'
import { GiBroom } from 'react-icons/gi'
import { TbArrowWaveRightDown, TbDatabaseOff } from 'react-icons/tb'

export const SENDER_RECIPIENTS = [
  { body: 'Elysium Labs', label: 'From' },
  { body: 'You', label: 'To' },
]
const ICON_SIZE = 20

export const HEADER = 'What we give you to do just that'

export const USP_ITEMS = [
  {
    icon: <TbArrowWaveRightDown size={ICON_SIZE} />,
    header: 'Workflow management',
    body: 'Juno is shipped with a predefined workflow, one we believe is the most optimal.',
  },
  {
    icon: <GiBroom size={ICON_SIZE} />,
    header: 'Minimalistic design',
    body: 'A minimalistic design for a less cognitive load. So you can use your brain for the needed work.',
  },
  {
    icon: <TbDatabaseOff size={ICON_SIZE} />,
    header: 'No external database',
    body: 'We store none of your emails, files or related data on our side. That is your data.',
  },
  {
    icon: <BsKeyboard size={ICON_SIZE} />,
    header: 'Keyboard shortcuts',
    body: 'For nearly everything you need, there is a keyboard shortcut. You name, we probably have it.',
  },
]

export const BUTTONS_ARRAY = [
  { label: 'Todo', icon: <FiCheckCircle /> },
  { label: 'Archive', icon: <FiArchive /> },
]

export const INBOX_ZERO = {
  header: 'Inbox zero',
  body: 'You have reached it!',
}
