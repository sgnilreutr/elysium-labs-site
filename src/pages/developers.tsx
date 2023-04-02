import GithubRepositories from '@/components/github/GithubRepositories'
import Layout from '@/components/Layout'
import Section from '@/components/Section'
import SEO from '@/components/Seo'
import InlineLink from '@/components/elements/InlineLink'
import Stack from '@/components/elements/Stack'
import Docs from '@/components/infoBlocks/Docs'
import useHasScrolled from '@/hooks/useHasScrolled'
import useHasVerticalScroll from '@/hooks/useHasVerticalScroll'
import { getRepos } from '@/lib/getRepos'
import { getContributorsInformation } from '@/lib/getContributorsInformation'

import type { InferGetStaticPropsType } from 'next'
import Header from '@/components/elements/Header'
import SectionList from '@/components/SectionList'

const DEVELOPERS_HEADER = 'For Developers'
const DEVELOPERS_SUB_HEADER = 'The details you are looking for as a developer'

export type TDevelopers = InferGetStaticPropsType<typeof getStaticProps>

const sectionsData = [
  {
    title: 'Contributing',
    content: (
      <>
        <p>
          If you are a developer and wish to contribute to open-source software
          that you can use for learning, or for your own daily application, join
          Elysium Labs.
        </p>
        <p>
          We at Elysium Labs are currently focused on adding value to the world,
          without requiring any value back. We do appreciate contributions in
          terms of code or feedback, this would be mutually beneficial. Reach
          out to us via {''}
          <InlineLink href="mailto:robbert@elysiumlabs.io">
            email
          </InlineLink> or{' '}
          <InlineLink href="https://discord.gg/773bDh4X">Discord</InlineLink>.
        </p>
      </>
    ),
  },
  {
    title: 'Tech stack',
    content: (
      <>
        <p>
          The used tech stack for the projects is as of writing focused around
          Typescript, React, Redux, and Radix UI.
        </p>
        <p>
          We apply different building tools based on the application&apos;s
          situation, such as Vite or just ESBuild. The applications also have
          additional complementary dependecies giving the application&apos;s
          requirements. If you wish to improve your skills with these
          technologies and join a growing community of developers - don&apos;t
          hesitate and join the
          <InlineLink href="https://discord.gg/773bDh4X">
            Discord
          </InlineLink>{' '}
          now.
        </p>
      </>
    ),
  },
]

const Seo = {
  title: 'Developers',
  description: 'The technical details',
}

const Developers = ({ repoContributors, repos }: TDevelopers) => {
  const { scrollY } = useHasScrolled()
  const { hasVerticalScroll } = useHasVerticalScroll()
  return (
    <Layout>
      <SEO title={Seo.title} description={Seo.description} />
      <div className="flex flex-col items-center mx-4 justify-items-center sm:mx-auto sm:w-full max-w-7xl">
        <div
          className={`${
            hasVerticalScroll && scrollY > 0 && 'opacity-30'
          } transition-all duration-1000`}
        >
          <div className="pt-20 pb-6">
            <Header type="h1" className="text-4xl text-center">
              {DEVELOPERS_HEADER}
            </Header>
            <Header
              type="h4"
              className="text-2xl text-center"
              weight="font-regular"
              color="text-gray-500"
            >
              {DEVELOPERS_SUB_HEADER}
            </Header>
          </div>
        </div>
        <SectionList sectionsData={sectionsData} className="pb-24" />
        <Docs />
        <GithubRepositories repoContributors={repoContributors} repos={repos} />
      </div>
    </Layout>
  )
}

export default Developers

export async function getStaticProps() {
  const repos = await getRepos()
  const repoContributors = repos
    ? await Promise.all(
        repos.map((repo) => getContributorsInformation({ repository: repo }))
      )
    : []

  return {
    props: {
      repos,
      repoContributors,
    },
  }
}
