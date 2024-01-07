import { octokit } from '@/data/octokitApi'

import type { SingleRepoType } from './getRepos'
import type { ReturnTypeOf, UnwrapPromise } from './typeHelpers'

interface GetContributorsInformation {
  repository: SingleRepoType
}

export async function getContributorsInformation({
  repository,
}: GetContributorsInformation) {
  try {
    if (!repository.name) {
      return null
    }
    const contributorsResponse = await octokit.request(
      'GET /repos/{owner}/{repo}/contributors',
      {
        owner: 'Elysium-Labs-EU',
        repo: repository.name,
      }
    )
    return {
      repository: repository.name,
      contributors: contributorsResponse.data,
    }
  } catch (err) {
    console.error(err)
  }
}

type GetContributorsInformationResponse = ReturnTypeOf<
  typeof getContributorsInformation
>
export type GetContributorsInformationResponseType =
  UnwrapPromise<GetContributorsInformationResponse>

type ArrayElementType<T> = T extends (infer U)[] ? U : never
type NonNullableGetContributorsInformationResponseType =
  NonNullable<GetContributorsInformationResponseType>
export type SingleContributorsEntryType = ArrayElementType<
  NonNullableGetContributorsInformationResponseType['contributors']
>
