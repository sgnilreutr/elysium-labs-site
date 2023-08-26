import { FiExternalLink } from 'react-icons/fi'
import { RxReader } from 'react-icons/rx'

import Button from '../elements/Button'
import InfoBlock from '../elements/InfoBlock'
import Stack from '../elements/Stack'

const href = process.env.NEXT_PUBLIC_DOCS_LINK

const HEADER = 'Docs'
const SUB_HEADER = 'work in progress'
const DESCRIPTION = [
  'Read up on our documentation,',
  'how to use Juno, and how Juno technically works.',
]
const BUTTON = 'Show the docs'

const Docs = () => (
  <InfoBlock href={href}>
    <div className="p-6 text-orange-900 bg-orange-300 border border-orange-300 md:p-10 lg:p-16 max-w-7xl sm:mx-auto">
      <Stack
        align="center"
        className="md:!gap-10"
        direction="vertical"
        spacing="large"
      >
        <RxReader size={32} />

        <Stack direction="vertical" align="center">
          <h3 className="text-3xl font-semibold">{HEADER}</h3>
          <span className="text-orange-700">{SUB_HEADER}</span>
        </Stack>

        <Stack
          className="text-xl cursor-pointer md:max-w-3xl hover:underline"
          justify="center"
          spacing="mini"
          wrap
        >
          {DESCRIPTION.map((description, index) => (
            <p
              key={index}
              className="text-center  decoration-orange-700 md:text-left"
            >
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

export default Docs
