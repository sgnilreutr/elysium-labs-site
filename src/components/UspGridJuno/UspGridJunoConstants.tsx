import { BsKeyboard } from 'react-icons/bs'
import { FiCheckCircle, FiArchive } from 'react-icons/fi'
import { GiBroom } from 'react-icons/gi'
import { TbArrowWaveRightDown, TbDatabaseOff } from 'react-icons/tb'
import TextHighlight from '../elements/TextHighlight'

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
    body: (
      <>
        Juno is shipped with a predefined workflow, one we believe is the{' '}
        <TextHighlight>most optimal</TextHighlight>.
      </>
    ),
  },
  {
    icon: <GiBroom size={ICON_SIZE} />,
    header: 'Minimalistic design',
    body: (
      <>
        A minimalistic design for a{' '}
        <TextHighlight>less cognitive load.</TextHighlight> So you can use your
        brain for the needed work.
      </>
    ),
  },
  {
    icon: <TbDatabaseOff size={ICON_SIZE} />,
    header: 'No external database',
    body: (
      <>
        <TextHighlight>We store none</TextHighlight> of your emails, files or
        related data on our side. That is your data.
      </>
    ),
  },
  {
    icon: <BsKeyboard size={ICON_SIZE} />,
    header: 'Keyboard shortcuts',
    body: (
      <>
        <TextHighlight>For nearly everything you need</TextHighlight>, there is
        a keyboard shortcut. You name, we probably have it.
      </>
    ),
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

export const EMAIL_TIME_EXPIRED = '1 hour ago'
