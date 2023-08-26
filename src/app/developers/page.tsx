import InlineLink from '@/components/elements/InlineLink'
import GithubRepositories from '@/components/github/GithubRepositories'
import Docs from '@/components/infoBlocks/Docs'
import { getContributorsInformation } from '@/lib/getContributorsInformation'
import { getRepos } from '@/lib/getRepos'
import { Metadata } from 'next/types'

import SectionList from '@/components/SectionList'
import Heading from '@/components/elements/Heading'
import ScrollTransitionWrapper from '@/components/ScrollTransitionWrapper'

const DEVELOPERS_HEADER = 'For Developers'
const DEVELOPERS_SUB_HEADER = 'The details you are looking for as a developer'

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

export const metadata: Metadata = {
  title: 'Developers',
  description: 'The technical details',
}

async function getRepoData() {
  const repos = (await getRepos()) ?? null
  const repoContributors = repos
    ? await Promise.all(
      repos.map((repo) => getContributorsInformation({ repository: repo }))
    )
    : []

  return { repos, repoContributors }
}

export default async function Developers() {
  const { repos, repoContributors } = await getRepoData()

  return (

    <div className="flex flex-col items-center justify-items-center sm:mx-auto sm:w-full max-w-7xl">
      <ScrollTransitionWrapper>
        <div className="pt-20 pb-6">
          <Heading type="h1" className="text-4xl text-center">
            {DEVELOPERS_HEADER}
          </Heading>
          <Heading
            type="h2"
            className="text-2xl text-center"
            weight="font-regular"
            color="text-gray-500"
          >
            {DEVELOPERS_SUB_HEADER}
          </Heading>
        </div>
      </ScrollTransitionWrapper>
      <SectionList sectionsData={sectionsData} className="pb-48 mx-4" />
      <Docs />
      <GithubRepositories repoContributors={repoContributors} repos={repos} />
    </div>
  )
}
