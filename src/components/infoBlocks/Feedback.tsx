import { RxChatBubble } from 'react-icons/rx'
import InfoBlock from '../elements/InfoBlock'
import Stack from '../elements/Stack'
import Button from '../elements/Button'
import { FiExternalLink } from 'react-icons/fi'

const href = process.env.NEXT_PUBLIC_JUNO_FEEDBACK_LINK
const HEADER = 'Feedback'
const DESCRIPTION = 'Provide feedback and steer the development of Juno.'
const BUTTON = "I'll give feedback"

const Feedback = () => (
  <InfoBlock href={href}>
    <div className="p-6 text-white bg-black border border-gray-900 md:p-10 lg:p-16 max-w-7xl sm:mx-auto">
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

        <Button className="bg-white hover:bg-gray-100 hover:border-slate-200">
          <span className="flex flex-row items-center gap-2">
            {BUTTON} <FiExternalLink />
          </span>
        </Button>
      </Stack>
    </div>
  </InfoBlock>
)

export default Feedback
