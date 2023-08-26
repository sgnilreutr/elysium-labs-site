import { FiExternalLink } from 'react-icons/fi'
import { RxDiscordLogo } from 'react-icons/rx'

import Button from '../elements/Button'
import InfoBlock from '../elements/InfoBlock'
import Stack from '../elements/Stack'

const href = process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK

const HEADER = 'Discord'
const DESCRIPTION = [
  'Join our Discord community,',
  'here you can chat about new ideas, drop your feedback, and receive announcements.',
]
const BUTTON = 'Join'

const Discord = () => (
  <InfoBlock href={href}>
    <div className="p-6 text-white border border-gray-300 bg-slate-400 md:p-10 lg:p-16 max-w-7xl sm:mx-auto">
      <Stack
        align="center"
        className="md:!gap-10"
        direction="vertical"
        spacing="large"
      >
        <RxDiscordLogo size={32} />

        <h3 className="text-3xl font-semibold">{HEADER}</h3>

        <Stack
          className="text-xl text-center cursor-pointer md:max-w-3xl hover:underline"
          justify="center"
          spacing="mini"
          wrap
        >
          {DESCRIPTION.map((description, index) => (
            <p key={index} className=" decoration-gray-500">
              {description}
            </p>
          ))}
        </Stack>

        <Button className="bg-white hover:bg-gray-100 hover:border-slate-200">
          <span className="flex flex-row items-center gap-2">
            {BUTTON} <FiExternalLink />
          </span>
        </Button>
      </Stack>
    </div>
  </InfoBlock>
)

export default Discord
