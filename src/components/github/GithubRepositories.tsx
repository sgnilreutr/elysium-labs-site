import type { TDevelopers } from '@/pages/developers'
import RepoContainer from './GithubRepoContainer'
import Header from '../elements/Header'

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
    <div className="flex flex-col items-center py-24">
      <div className="pb-6">
        <Header type="h2" className="text-4xl text-center">
          Github
        </Header>
        <Header
          type="h4"
          className="text-2xl text-center"
          color="text-gray-500"
          weight="font-regular"
        >
          The organization maintains these repositories
        </Header>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {enhancedRepository ? (
          enhancedRepository?.map((repository) => (
            <RepoContainer key={repository?.name} repository={repository} />
          ))
        ) : (
          <p className="py-6">Loading Github repositories...</p>
        )}
      </div>
    </div>
  )
}

export default GithubRepositories
