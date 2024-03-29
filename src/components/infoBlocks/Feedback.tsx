import { FiExternalLink } from 'react-icons/fi'
import { RxChatBubble } from 'react-icons/rx'

import Button from '../elements/Button'
import InfoBlock from '../elements/InfoBlock'
import Stack from '../elements/Stack'

const href = process.env.NEXT_PUBLIC_JUNO_FEEDBACK_LINK
const HEADER = 'Feedback'
const DESCRIPTION = 'Provide feedback and steer the development of Juno.'
const BUTTON = "I'll give feedback"

const Feedback = () => (
  <InfoBlock href={href}>
    <div className="p-6 text-gray-600 bg-white border border-gray-100 md:p-10 lg:p-16 max-w-7xl sm:mx-auto">
      <Stack
        align="center"
        className="md:!gap-10"
        direction="vertical"
        spacing="large"
      >
        <RxChatBubble size={32} />

        <h3 className="text-3xl font-semibold">{HEADER}</h3>

        <p className="text-xl text-center hover:underline decoration-gray-500 md:max-w-3xl">
          {DESCRIPTION}
        </p>

        <Button className="bg-gray-200 hover:bg-gray-300 hover:border-slate-300">
          <span className="flex flex-row items-center gap-2">
            {BUTTON} <FiExternalLink />
          </span>
        </Button>
      </Stack>
    </div>
  </InfoBlock>
)

export default Feedback
