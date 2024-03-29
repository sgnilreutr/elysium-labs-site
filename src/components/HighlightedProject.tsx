import Image from 'next/image'
import Link from 'next/link'
import { FiChevronRight } from 'react-icons/fi'

import Heading from '@/components/elements/Heading'
import Label from '@/components/elements/Label'
import Stack from '@/components/elements/Stack'
import JunoLogo from 'public/images/Juno_logo_dark.png'

const PROJECT_HEADER = 'Featured'
const PROJECT_SUB_HEADER = 'We are currently focusing on this project'

const PROJECT_NAME = 'Juno'
const PROJECT_LABEL = 'Under Development'
const PROJECT_DESCRIPTION =
  'Juno is fast, lightweight, and intuitive, making it the perfect choice for anyone looking for a simple and effective way to manage their Gmail account.'
const PROJECT_READ_MORE = 'read more'

const HighlightedProject = () => {
  return (
    <div className="mx-4 max-w-7xl sm:mx-auto sm:w-full">
      <Stack
        align="center"
        direction="vertical"
        justify="center"
        className="p-6 text-white bg-black border radial_spotlight md:p-10 lg:p-24"
      >
        <div className="pb-12">
          <Heading
            type="h2"
            className="text-4xl text-center text-gray-300"
            animation="none"
          >
            {PROJECT_HEADER}
          </Heading>
          <Heading
            type="h4"
            weight="font-regular"
            color="text-gray-500"
            className="text-2xl text-center text-orange-600"
            animation="none"
          >
            {PROJECT_SUB_HEADER}
          </Heading>
        </div>
        <Link href="/juno">
          <span className="text-2xl font-semibold">{PROJECT_NAME}</span>
        </Link>
        <Stack
          direction="vertical"
          justify="center"
          align="center"
          className="max-w-prose"
          spacing="huge"
        >
          <Link href="/juno">
            <Image
              src={JunoLogo}
              alt="Juno Email Manager"
              className="cursor-pointer"
            />
          </Link>

          <div className="flex flex-col max-w-max">
            <Link href="/juno">
              <Label>
                <span className="font-semibold">{PROJECT_LABEL}</span>
              </Label>
            </Link>
          </div>
          <Link href="/juno" className="max-w-md text-center">
            <p className="mt-6 cursor-pointer">{PROJECT_DESCRIPTION}</p>
          </Link>
          <Link
            href="/juno"
            className="text-orange-600 transition cursor-pointer hover:text-orange-400"
          >
            <Stack align="end" spacing="mini" justify="center">
              <span>{PROJECT_READ_MORE}</span>
              <span className="pb-[3px]">
                <FiChevronRight color="inherit" />
              </span>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </div>
  )
}

export default HighlightedProject
