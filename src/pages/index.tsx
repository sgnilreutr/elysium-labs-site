import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Link from 'next/link'
import JunoLogo from '../../public/images/Juno_logo.png'
import useHasScrolled from '../hooks/useHasScrolled'
import Label from '../components/elements/label'
import useHasVerticalScroll from '../hooks/useHasVerticalScroll'
import { FiSlack } from 'react-icons/fi'

const COMPANY_TITLE1 = 'Elysium '
const COMPANY_TITLE2 = 'Labs'
const COMPANY_DESCRIPTION = 'Open-source software organization'
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
      <div className="flex flex-row p-12">
        <div className={`max-w-7xl flex flex-col justify-center flex-wrap items-center w-full mx-auto h-96 ${ hasVerticalScroll && scrollY > 0 && 'text-gray-200'
          } transition-all duration-1000`}>
          <h1
            className="text-8xl flex flex-row flex-wrap"
          >
            {COMPANY_TITLE1}
            <span className="font-semibold ml-4">{COMPANY_TITLE2}</span>
          </h1>
          <h4 className="text-gray-500 mt-10">{COMPANY_DESCRIPTION}</h4>
        </div>
      </div>
      <div className="py-20 w-full">
        <div className="max-w-7xl mx-4 sm:mx-auto text-white bg-black rounded-xl p-8 drop-shadow-2xl">
          <div className="my-10 text-3xl text-center">
            <p className="font-semibold">{SUB_TITLE}</p>
            <div className="mt-6">
              <Link href="/principals">
                <div className="flex flex-row justify-center cursor-pointer flex-wrap">
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
      <div
        className={`max-w-7xl mx-4 sm:mx-auto sm:w-full ${ hasVerticalScroll && scrollY < 1 ? 'opacity-30' : 'opacity-100'
          } transition-all duration-1000`}
      >
        <h2 className="mt-20">{PROJECT_HEADER}</h2>
        <h4 className="text-gray-500">{PROJECT_SUB_HEADER}</h4>
        <div className=" border-2 p-6 rounded-lg my-6">
          <Link href="/juno">
            <a className="text-2xl font-semibold">Juno</a>
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
                  The open-source Email Manager for Gmail. The goal of Juno is
                  to spend as little time as possible in the mailbox.
                </p>
              </Link>
              <Link href="/juno">
                <span className="text-orange-600 cursor-pointer">
                  read more...
                </span>
              </Link>
            </div>
            <div className="my-4 mx-auto sm:mx-4">
              <Link href="/juno">
                <Image
                  src={JunoLogo}
                  alt="Juno Email Manager"
                  className="cursor-pointer invert"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`max-w-7xl mx-4 sm:mx-auto sm:w-full ${ hasVerticalScroll && scrollY < 1 ? 'opacity-30' : 'opacity-100'
          } transition-all duration-1000`}
      >
        <div className="py-20 w-full">
          <a href={process.env.NEXT_PUBLIC_SLACK_INVITE_LINK ?? ''}>
            <div className="max-w-7xl mx-4 sm:mx-auto text-black bg-gray-300 rounded-xl p-6">
              <div className="my-10 text-center flex flex-col items-center justify-center ">
                <div className="my-6">
                  <FiSlack size={32} />
                </div>
                <h3 className="font-semibold ">Slack</h3>

                <div className="flex flex-row flex-wrap justify-center cursor-pointer text-xl md:max-w-3xl mt-6">
                  <p className="mx-1 hover:underline decoration-gray-500">
                    Join our Slack community,
                  </p>
                  <p className="mx-1 hover:underline decoration-gray-500">
                    here you can chat about new ideas, drop your feedback, and
                    receive announcements.
                  </p>
                </div>
                <div className="mt-8">
                  <button
                    className="bg-white text-black py-4 px-6 rounded-lg font-semibold hover:bg-gray-100 border border-transparent hover:border-black transition-all"
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
    </Layout>
  )
}

export default Home
