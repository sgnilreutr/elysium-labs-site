import { useState } from 'react'
import { FiRefreshCw } from 'react-icons/fi'

import Header from '../elements/Header'
import Stack from '../elements/Stack'
import EmailButton from './EmailButton'
import EmailItem from './EmailItem'
import {
  BUTTONS_ARRAY,
  HEADER,
  INBOX_ZERO,
  USP_ITEMS,
} from './UspGridJunoConstants'

const UspGridTwo = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const maxCards = USP_ITEMS.length

  const cardsAreGone = currentCardIndex === USP_ITEMS.length

  const handleReset = () => {
    setCurrentCardIndex(0)
  }

  const handleCardSwitch = () => {
    setCurrentCardIndex((prevState) => {
      if (prevState === maxCards) {
        return prevState
      }
      return prevState + 1
    })
  }

  return (
    <Stack direction="vertical" className="w-full" align="center">
      <Header
        type="h3"
        className="py-10 text-3xl text-center"
        color="text-gray-500"
        weight="font-regular"
      >
        {HEADER}
      </Header>
      <div className="w-screen max-w-2xl">
        <Stack spacing="large">
          <div className="relative w-screen min-h-[300px] md:min-h-[450px]">
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
              <div className="absolute top-0 left-0 flex flex-col items-center w-full p-8 text-black bg-white border rounded-md shadow-sm  min-h-[300px] md:min-h-[450px] border-neutral-200">
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
            <Stack direction="vertical" className="pt-2">
              <span className="text-sm text-neutral-400 px-[12px]">
                {currentCardIndex + 1} / {maxCards}
              </span>
              <Stack direction="vertical" spacing="mini">
                {BUTTONS_ARRAY.map(({ label, icon }) => (
                  <EmailButton
                    key={label}
                    label={label}
                    icon={icon}
                    onClick={handleCardSwitch}
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
