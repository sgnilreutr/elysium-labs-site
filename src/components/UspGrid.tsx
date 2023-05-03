import { BsKeyboard } from 'react-icons/bs'
import { GiBroom } from 'react-icons/gi'
import { TbArrowWaveRightDown, TbDatabaseOff } from 'react-icons/tb'
import UspItem from './UspItem'
import Stack from './elements/Stack'
import Heading from './elements/Heading'

const ICON_SIZE = 28

const HEADER = 'What we give you to do just that'

const USP_ITEMS = [
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
    body: 'For nearly everything you need, there is a keyboard shortcut.',
  },
]

const UspGrid = () => {
  return (
    <Stack direction="vertical" className="w-full">
      <Heading
        type="h3"
        className="py-10 text-3xl text-center"
        color="text-gray-500"
        weight="font-regular"
      >
        {HEADER}
      </Heading>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {USP_ITEMS.map(({ body, header, icon }) => (
          <UspItem key={header} icon={icon} header={header} body={body} />
        ))}
      </div>
    </Stack>
  )
}

export default UspGrid
