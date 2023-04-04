import classNames from '@/lib/classNames'

import Stack from '../elements/Stack'
import SenderRecipient from './SenderRecipient'
import { EMAIL_TIME_EXPIRED, SENDER_RECIPIENTS } from './UspGridJunoConstants'

import type { ReactNode } from 'react'

const FakText = () => {
  const randomNum = Math.floor(Math.random() * 3) + 1
  return (
    <div
      className={classNames(
        'inline-block w-full h-4 bg-gray-100 rounded-sm',
        `${randomNum === 1 && 'col-span-1'}`,
        `${randomNum === 2 && 'col-span-2'}`,
        `${randomNum === 3 && 'col-span-3'}`
      )}
    />
  )
}

interface IEmailItem {
  body: ReactNode
  header: string
  icon: JSX.Element
  shouldEnter: boolean
}

const MAX_NUMBER_FAKE_TEXT_ROWS = 9

const EmailItem = ({ body, header, icon, shouldEnter }: IEmailItem) => {
  return (
    <div
      className={classNames(
        'absolute top-0 left-0 flex flex-col items-center md:w-full p-4 md:p-8 text-black bg-white border rounded-md shadow-sm min-h-64 border-neutral-200',
        `${shouldEnter && 'animate-slideUpAndFadeOpacityChanged'}`,
        `${!shouldEnter && 'invisible'}`,
        'will-change-[opacity,transform]'
      )}
    >
      <Stack
        direction="vertical"
        className="w-full border-b border-neutral-100"
      >
        <Stack justify="between" align="center" className="w-full">
          <Stack align="center">
            <div className="p-2 text-orange-600 bg-orange-200 rounded-full">
              {icon}
            </div>
            <h3 className="w-full text-xl font-semibold">{header}</h3>
          </Stack>
          <span className="text-sm text-right text-neutral-300 md:text-base">
            {EMAIL_TIME_EXPIRED}
          </span>
        </Stack>
        <Stack direction="vertical" className="pb-2">
          {SENDER_RECIPIENTS.map(({ body, label }) => (
            <SenderRecipient key={label} body={body} label={label} />
          ))}
        </Stack>
      </Stack>
      <div className="w-full py-2">
        <span className="font-semibold text-gray-700">
          {body}
          <div className="grid grid-cols-3 gap-2 pt-1">
            {Array.from({ length: MAX_NUMBER_FAKE_TEXT_ROWS }).map(
              (_, index) => (
                <FakText key={index} />
              )
            )}
          </div>
        </span>
      </div>
    </div>
  )
}

export default EmailItem
