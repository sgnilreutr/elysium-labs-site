import type { NextPage } from 'next'
import Docs from 'components/docs'
import Label from 'components/elements/label'
import Layout from 'components/layout'
import SEO from 'components/seo'
import useHasScrolled from 'hooks/useHasScrolled'
import useHasVerticalScroll from 'hooks/useHasVerticalScroll'
import Image from 'next/image'
import Link from 'next/link'
import { FaDiscord } from 'react-icons/fa'

import JunoLogo from '../../public/images/Juno_logo_dark.png'

const COMPANY_TITLE1 = 'Elysium '
const COMPANY_TITLE2 = 'Labs'
const COMPANY_DESCRIPTION = 'Open-source software organization'
const COMPANY_SUB_DESCRIPTION =
  'Elysium Labs is an aspiring vibrant community of open-source software developers, designers, and enthusiasts who are passionate about creating innovative and powerful tools for the benefit of all.'
const SUB_TITLE = 'Building software'
const POWERFUL = 'Powerful,'
const EASY_TO_GRASP = 'easy-to-grasp,'
const OPEN_SOURCE = 'and open-source'

const PROJECT_HEADER = 'Featured'
const PROJECT_SUB_HEADER = 'We are currently focusing on this project'

const Home: NextPage = () => {
  const { scrollY } = useHasScrolled()
  const { hasVerticalScroll } = useHasVerticalScroll()

  return (
    <Layout>
      <SEO title="Software organization" />
      <div
        className={`max-w-7xl flex flex-col md:justify-center items-center w-full mx-auto h-96 my-24 ${
          hasVerticalScroll && scrollY > 0 && 'text-gray-200'
        } transition-all duration-1000`}
      >
        <h1 className="flex flex-row flex-wrap text-8xl">
          <span className="mr-4">{COMPANY_TITLE1}</span>
          <span className="font-semibold">{COMPANY_TITLE2}</span>
        </h1>
        <h4 className="mt-10 text-gray-500">{COMPANY_DESCRIPTION}</h4>
        <div className="max-w-prose">
          <h5 className="mt-10 text-gray-500">{COMPANY_SUB_DESCRIPTION}</h5>
        </div>
      </div>
      <div className="w-full py-20">
        <div className="p-8 mx-4 text-white bg-black max-w-7xl sm:mx-auto rounded-xl drop-shadow-2xl">
          <div className="my-10 text-3xl text-center">
            <p className="font-semibold">{SUB_TITLE}</p>
            <div className="mt-6">
              <Link href="/principals" passHref>
                <div className="flex flex-row flex-wrap justify-center cursor-pointer">
                  <p className="mx-1 hover:underline decoration-gray-500">
                    {POWERFUL}
                  </p>
                  <p className="mx-1 hover:underline decoration-gray-100">
                    {EASY_TO_GRASP}
                  </p>
                  <p className="mx-1 hover:underline decoration-orange-500">
                    {OPEN_SOURCE}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 max-w-7xl sm:mx-auto sm:w-full">
        <h2 className="mt-20 text-center">{PROJECT_HEADER}</h2>
        <h4 className="text-center text-gray-500">{PROJECT_SUB_HEADER}</h4>
        <div className="p-6 my-6 border-2 rounded-lg ">
          <Link href="/juno">
            <span className="text-2xl font-semibold">Juno</span>
          </Link>
          <div className="flex flex-col-reverse justify-between sm:flex-row sm:items-center">
            <div>
              <div className="flex flex-col max-w-max">
                <Label>
                  <p>
                    Juno is now in{' '}
                    <span className="font-semibold">Private Beta</span>
                  </p>
                </Label>
              </div>
              <Link href="/juno">
                <p className="mt-6 cursor-pointer">
                  Juno is fast, lightweight, and intuitive, making it the
                  perfect choice for anyone looking for a simple and effective
                  way to manage their Gmail account. Plus, because it&apos;s
                  open source, you can be sure that Juno is always improving and
                  evolving to meet your needs. Try Juno today and experience the
                  power of open source email management.
                </p>
              </Link>
              <Link href="/juno">
                <span className="text-orange-600 cursor-pointer">
                  read more...
                </span>
              </Link>
            </div>
            <div className="mx-auto my-4 sm:mx-4">
              <Link href="/juno">
                <Image
                  src={JunoLogo}
                  alt="Juno Email Manager"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-4 max-w-7xl sm:mx-auto sm:w-full">
        <div className="w-full py-20">
          <a href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK ?? ''}>
            <div className="p-6 mx-4 text-black bg-gray-300 max-w-7xl sm:mx-auto rounded-xl">
              <div className="flex flex-col items-center justify-center my-10 text-center ">
                <div className="my-6">
                  <FaDiscord size={32} />
                </div>
                <h3 className="font-semibold ">Discord</h3>

                <div className="flex flex-row flex-wrap justify-center mt-6 text-xl cursor-pointer md:max-w-3xl">
                  <p className="mx-1 hover:underline decoration-gray-500">
                    Join our Discord community,
                  </p>
                  <p className="mx-1 hover:underline decoration-gray-500">
                    here you can chat about new ideas, drop your feedback, and
                    receive announcements.
                  </p>
                </div>
                <div className="mt-8">
                  <button
                    className="px-6 py-4 font-semibold text-black transition-all bg-white border border-transparent rounded-lg hover:bg-gray-100 hover:border-black"
                    type="button"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <Docs />
    </Layout>
  )
}

export default Home
