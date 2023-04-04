import type { TDevelopers } from '@/pages/developers'
import RepoContainer from './GithubRepoContainer'
import Header from '../elements/Header'
import {
  GITHUB_HEADER,
  GITHUB_SUB_HEADER,
  GITHUB_LOADING,
} from './GithubConstants'

const GithubRepositories = ({ repoContributors, repos }: TDevelopers) => {
  const enhancedRepository = repos
    ? repos
        .map((repo, index) => {
          const contributorRepoEntry = repoContributors[index]
          if (contributorRepoEntry?.repository !== repo.name) {
            return
          }
          return { contributors: contributorRepoEntry.contributors, ...repo }
        })
        .filter((item): item is NonNullable<typeof item> => item !== undefined)
    : []

  return (
    <div className="flex flex-col items-center py-48 mx-4 md:mx-0">
      <div className="pb-6">
        <Header type="h2" className="text-4xl text-center">
          {GITHUB_HEADER}
        </Header>
        <Header
          type="h4"
          className="text-2xl text-center"
          color="text-gray-500"
          weight="font-regular"
        >
          {GITHUB_SUB_HEADER}
        </Header>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {enhancedRepository ? (
          enhancedRepository?.map((repository) => (
            <RepoContainer key={repository?.name} repository={repository} />
          ))
        ) : (
          <p className="py-6">{GITHUB_LOADING}</p>
        )}
      </div>
    </div>
  )
}

export default GithubRepositories
