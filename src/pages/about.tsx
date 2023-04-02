import Image from 'next/image'
import Logo from 'public/images/100x100px_EL_01.jpg'

import Header from '@/components/elements/Header'
import Layout from '@/components/Layout'
// import GithubContributors from '@/components/githubContributors'
import SEO from '@/components/Seo'
import useHasScrolled from '@/hooks/useHasScrolled'
import useHasVerticalScroll from '@/hooks/useHasVerticalScroll'
import SectionList from '@/components/SectionList'
import InlineLink from '@/components/elements/InlineLink'

const ABOUT_HEADER_1 = 'About'
const ABOUT_HEADER_2 = 'Elysium Labs'

const JOIN_LINK_HREF =
  'mailto:robbert@elysiumlabs.io?subject=I would like to participate'
const JOIN_LINK_TEXT =
  'Contact Robbert Tuerlings if you want to partake in this organization'

const sectionsData = [
  {
    title: 'Origin',
    content: (
      <>
        <p>
          Elysium Labs started as an open-source organization that aims to solve
          everyday productivity problems with powerful and easy-to-grasp
          software.
        </p>
        <p>
          The goal is to have as many volunteering developers as possible
          working on the solutions we provide. Ideally, giving them and you the
          best experience possible within the aspect the application covers.
        </p>
      </>
    ),
  },
]

const Seo = {
  title: 'About',
  description: 'Background information about the organization',
}

const About = () => {
  const { scrollY } = useHasScrolled()
  const { hasVerticalScroll } = useHasVerticalScroll()

  return (
    <Layout>
      <SEO title={Seo.title} description={Seo.description} />
      <div className="flex flex-col items-center mx-4 max-w-7xl sm:mx-auto sm:w-full">
        <div
          className={`${
            hasVerticalScroll && scrollY > 0 && 'opacity-30'
          } transition-all duration-1000`}
        >
          <div className="pt-20 pb-6">
            <Header type="h1" className="text-4xl text-center">
              {ABOUT_HEADER_1}
            </Header>
            <Header
              type="h4"
              className="text-2xl text-center"
              weight="font-regular"
              color="text-gray-500"
            >
              {ABOUT_HEADER_2}
            </Header>
          </div>
        </div>
        <div className="flex items-center justify-center my-10">
          <Image src={Logo} style={{ borderRadius: '1rem' }} alt="Logo" />
        </div>
        <div className="mt-20 max-w-prose">
          <InlineLink href={JOIN_LINK_HREF}>{JOIN_LINK_TEXT}</InlineLink>
        </div>

        <div className="my-10 max-w-prose">
          <SectionList sectionsData={sectionsData} />
        </div>
        {/* <GithubContributors /> */}
      </div>
    </Layout>
  )
}

export default About

export async function getStaticProps() {
  return {
    props: {},
  }
}
