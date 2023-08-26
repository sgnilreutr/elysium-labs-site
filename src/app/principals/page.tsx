import { FaBrain } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { ImPower } from 'react-icons/im'

import Heading from '@/components/elements/Heading'
import InlineLink from '@/components/elements/InlineLink'
import SectionList from '@/components/SectionList'
import Discord from '@/components/infoBlocks/Discord'
import { Metadata } from 'next'
import ScrollTransitionWrapper from '@/components/ScrollTransitionWrapper'

const PRINCIPALS_HEADER = 'Principals'
const PRINCIPALS_SUB_HEADER =
  'We aim to make software according to our core principals.'

const sectionsData = [
  {
    title: 'Powerful',
    icon: <ImPower size={20} />,
    content: (
      <>
        <p>
          Producing software capable of doing what most people require, with a
          fine-grained level of control over the data.
        </p>
        <p>
          If you as a user find something lacking,{' '}
          <InlineLink href="mailto:robbert@elysiumlabs.io">
            reach out to us
          </InlineLink>
          .
        </p>
      </>
    ),
  },
  {
    title: 'Easy-to-grasp',
    icon: <FaBrain size={20} />,
    content: (
      <>
        <p>
          Call it a no-brainer or intuitive, the goal of the software design is
          to be understandable for everyone with minimal effort.
        </p>
        <p>
          This is achieved via effective graphical designs and a fine balance of
          possible options to use.
        </p>
      </>
    ),
  },
  {
    title: 'Open-source',
    icon: <FiEye size={20} />,
    content: (
      <>
        <p>
          Open-source means that anyone can see the source code of the
          application and sometimes also contribute to it. This also applies to
          Juno.
        </p>
        <p>
          You can contribute by adding or updating code, or by simply voicing
          your thoughts on the latest version of Juno.
        </p>
      </>
    ),
  },
]

export const metadata: Metadata = {
  title: 'Principals',
  description: 'The principals we apply to our applications',
}

export default function Principals() {

  return (
    <div className="flex flex-col items-center mx-4 sm:mx-auto sm:w-full max-w-7xl">
      <ScrollTransitionWrapper>
        <div className="pt-20 pb-6">
          <Heading type="h1" className="text-4xl text-center">
            {PRINCIPALS_HEADER}
          </Heading>
          <Heading
            type="h2"
            color="text-gray-500"
            weight="font-regular"
            className="text-2xl text-center"
          >
            {PRINCIPALS_SUB_HEADER}
          </Heading>
        </div>
      </ScrollTransitionWrapper>
      <div className="flex flex-col items-center pb-48 mx-4 max-w-7xl sm:mx-auto sm:w-full">
        <SectionList sectionsData={sectionsData} />
      </div>
      <Discord />
    </div>
  )
}
