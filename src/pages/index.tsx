import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../../public/400x400px_EL_01.jpg'
import Link from 'next/link'

const COMPANY_TITLE1 = 'Elysium '
const COMPANY_TITLE2 = 'Labs'
const SUB_TITLE = 'Building powerful, easy-to-grasp, and open-source software.'
const SUB_TITLE_2 = 'The first creation is Juno, the email manager for Gmail.'

const PROJECT_HEADER = 'Featured'

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex flex-row bg-black p-12 text-white shadow-md">
        <div className="max-w-7xl flex flex-row justify-between flex-wrap items-center w-full mx-auto">
          <h1 className="text-7xl">
            {COMPANY_TITLE1}
            <span style={{ fontWeight: '600' }}>{COMPANY_TITLE2}</span>
          </h1>
          <Image src={Logo} alt="Elysium Labs" style={{ borderRadius: '24px' }} />
        </div>
      </div>
      <div className="text-3xl mt-20 py-12 mx-auto max-w-7xl w-full">
        <p>{SUB_TITLE}</p>
        <p>{SUB_TITLE_2}</p>
      </div>
      <div className="mx-auto max-w-7xl w-full">
        <h2>{PROJECT_HEADER}</h2>
        <div className="bg-gray-400">
          <Link href="/juno">
            <a className="text-2xl">Juno</a>
          </Link>
          <div className="flex flex-col max-w-max">
            <div className="rounded-md py-1.5 px-3 border border-dashed border-gray-900 flex items-center space-x-2  mt-4 sm:mt-10 z-20"><p>Juno is now in <span className="font-semibold">Private Beta</span></p></div>
          </div>
          <p>Open-source Email Manager for Gmail</p>
        </div>
      </div>
    </Layout>
  )
}

export default Home
