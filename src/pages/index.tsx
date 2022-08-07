import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Link from 'next/link'
import JunoLogo from '../../public/images/Juno_logo.png'
import useHasScrolled from '../hooks/useHasScrolled'
import Label from '../components/elements/label'

const COMPANY_TITLE1 = 'Elysium '
const COMPANY_TITLE2 = 'Labs'
const SUB_TITLE = 'Building software'
const POWERFUL = 'Powerful,'
const EASY_TO_GRASP = 'easy-to-grasp,'
const OPEN_SOURCE = 'and open-source'

const PROJECT_HEADER = 'Featured'

const Home: NextPage = () => {
  const { scrollY } = useHasScrolled()

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-row p-12">
        <div className="max-w-7xl flex flex-row justify-center flex-wrap items-center w-full mx-auto h-96 select-none">
          <h1
            className={`text-8xl ${ scrollY > 0 && 'text-gray-200'
              } transition-all duration-1000`}
          >
            {COMPANY_TITLE1}
            <span className="font-semibold">{COMPANY_TITLE2}</span>
          </h1>
        </div>
      </div>
      <div className="py-20 w-full">
        <div className="max-w-7xl mx-auto text-white bg-black rounded-xl p-8 drop-shadow-2xl">
          <div className="my-10 text-3xl text-center">
            <p className="font-semibold">{SUB_TITLE}</p>
            <div className="mt-6">
              <Link href="/principals">
                <div className="flex flex-row justify-center cursor-pointer">
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
        className={`max-w-7xl mx-auto w-full ${ scrollY > 0 ? 'opacity-100' : 'opacity-30'
          } transition-all duration-1000`}
      >
        <h2 className="mt-20">{PROJECT_HEADER}</h2>
        <div className=" border-2 p-6 rounded-lg my-6">
          <Link href="/juno">
            <a className="text-2xl font-semibold">Juno</a>
          </Link>
          <div className="flex flex-row justify-between">
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
    </Layout>
  )
}

export default Home
