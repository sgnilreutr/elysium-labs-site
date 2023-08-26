'use client'

import { useRef, useState } from 'react'
import { FiRefreshCw } from 'react-icons/fi'

import EmailButton from './EmailButton'
import EmailItem from './EmailItem'
import {
  BUTTONS_ARRAY,
  HEADER,
  INBOX_ZERO,
  SUB_HEADER,
  USP_ITEMS,
} from './UspGridJunoConstants'
import Heading from '../elements/Heading'
import Stack from '../elements/Stack'

const UspGridTwo = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const mailContainerRef = useRef<HTMLDivElement | null>(null)

  const maxCards = USP_ITEMS.length
  const cardsAreGone = currentCardIndex === USP_ITEMS.length

  const handleReset = () => {
    setCurrentCardIndex(0)
  }

  const handleCardSwitch = () => {
    if (mailContainerRef.current) {
      mailContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      })
    }

    setCurrentCardIndex((prevState) => {
      if (prevState === maxCards) {
        return prevState
      }
      return prevState + 1
    })
  }

  return (
    <Stack direction="vertical" className="w-full" align="center">
      <Heading
        type="h3"
        className="pt-10 text-3xl text-center"
        color="text-gray-500"
        weight="font-regular"
      >
        {HEADER}
      </Heading>
      <Heading
        type="h4"
        className="pb-10 text-lg text-center text-gray-400"
        weight="font-regular"
      >
        {SUB_HEADER}
      </Heading>
      <div className="w-full max-w-2xl md:w-screen">
        <Stack spacing="large" className="flex-col-reverse md:flex-row">
          <div
            className="relative md:w-screen min-h-[450px]"
            ref={mailContainerRef}
          >
            {!cardsAreGone ? (
              USP_ITEMS.map(({ body, header, icon }, index) => {
                const shouldEnter = currentCardIndex === index

                if (
                  index >= currentCardIndex - 1 &&
                  index <= currentCardIndex
                ) {
                  return (
                    <EmailItem
                      body={body}
                      header={header}
                      icon={icon}
                      key={header}
                      shouldEnter={shouldEnter}
                    />
                  )
                }
                return null
              })
            ) : (
              <div className="absolute top-0 left-0 flex flex-col items-center w-full p-8 text-black bg-white border rounded-md shadow-sm md:min-h-[450px] border-neutral-200">
                <Stack direction="vertical" align="center">
                  <Stack direction="vertical" align="center">
                    <span className="text-xl font-semibold">
                      {INBOX_ZERO.header}
                    </span>
                    <span>{INBOX_ZERO.body}</span>
                  </Stack>
                  <EmailButton
                    label="Start over"
                    icon={<FiRefreshCw />}
                    onClick={handleReset}
                  />
                  <ul className="pt-4 text-center animate-slideUpAndFade">
                    {USP_ITEMS.map(({ header }) => (
                      <li key={header} className="text-neutral-400">
                        {header}
                      </li>
                    ))}
                  </ul>
                </Stack>
              </div>
            )}
          </div>
          {!cardsAreGone ? (
            <Stack className="flex-row items-center justify-center md:pt-2 md:flex-col">
              <span className="text-sm text-neutral-400 px-[12px] flex items-center mr-auto gap-1">
                <span className="text-sm text-neutral-600">
                  {currentCardIndex + 1}
                </span>{' '}
                / {maxCards}
              </span>
              <Stack className="md:flex-col" spacing="mini">
                {BUTTONS_ARRAY.map(({ label, icon }) => (
                  <EmailButton
                    key={label}
                    label={label}
                    icon={icon}
                    onClick={handleCardSwitch}
                    currentCardIndex={currentCardIndex}
                  />
                ))}
              </Stack>
            </Stack>
          ) : null}
        </Stack>
      </div>
    </Stack>
  )
}

export default UspGridTwo
