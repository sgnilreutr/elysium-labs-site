import React from 'react'
import { BsKeyboard } from 'react-icons/bs'
import { GiBroom } from 'react-icons/gi'
import { TbArrowWaveRightDown, TbDatabaseOff } from 'react-icons/tb'

const ICON_SIZE = 20

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

const UspItem = ({
  icon,
  header,
  body,
}: {
  icon: JSX.Element
  header: string
  body: string
}) => {
  return (
    <div className="max-w-md flex flex-col items-center bg-black text-white rounded-xl p-8 drop-shadow-2xl m-4 text-center">
      <div>{icon}</div>
      <h4 className="mt-3 mb-1 font-light text-xl">{header}</h4>
      <span className="text-gray-300">{body}</span>
    </div>
  )
}

const UspGrid = () => {
  return (
    <div className="my-14 w-full">
      <h3 className="text-gray-500 my-10 text-center">
        What we give you to do just that
      </h3>
      <div className="flex flex-row flex-wrap items-center justify-evenly">
        {USP_ITEMS.map((item) => (
          <UspItem
            key={item?.header}
            icon={item?.icon}
            header={item?.header}
            body={item?.body}
          />
        ))}
      </div>
    </div>
  )
}

export default UspGrid
