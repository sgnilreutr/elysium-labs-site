import { octokit } from '@/pages/_app'
import type { TSingleRepoType } from './getRepos'
import type { ReturnTypeOf, UnwrapPromise } from './typeHelpers'

interface IGetContributorsInformation {
  repository: TSingleRepoType
}

export async function getContributorsInformation({
  repository,
}: IGetContributorsInformation) {
  try {
    if (!repository || !repository?.name) {
      return null
    }
    const contributorsResponse = await octokit.request(
      'GET /repos/{owner}/{repo}/contributors',
      {
        owner: 'Elysium-Labs-EU',
        repo: `${repository.name}`,
      }
    )
    if (contributorsResponse?.status === 200) {
      return {
        repository: repository.name,
        contributors: contributorsResponse.data,
      }
    } else {
      return null
    }
  } catch (err) {
    console.error(err)
  }
}

type TGetContributorsInformationResponse = ReturnTypeOf<
  typeof getContributorsInformation
>
export type TGetContributorsInformationResponseType =
  UnwrapPromise<TGetContributorsInformationResponse>

type ArrayElementType<T> = T extends (infer U)[] ? U : never
type NonNullableGetContributorsInformationResponseType =
  NonNullable<TGetContributorsInformationResponseType>
export type TSingleContributorsEntryType = ArrayElementType<
  NonNullableGetContributorsInformationResponseType['contributors']
>
