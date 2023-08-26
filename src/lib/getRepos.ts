import { octokit } from '@/data/octokitApi'
import type { ReturnTypeOf, UnwrapPromise } from './typeHelpers'

export async function getRepos() {
  try {
    const repoResponse = await octokit.request('GET /orgs/{org}/repos', {
      org: 'Elysium-Labs-EU',
      type: 'public',
    })
    if (repoResponse?.status === 200) {
      return repoResponse?.data
    } else {
      return null
    }
  } catch (err) {
    console.error(err)
  }
}

type GetReposResponse = ReturnTypeOf<typeof getRepos>
export type GetReposResponseType = UnwrapPromise<GetReposResponse>

type ArrayElementType<T> = T extends (infer U)[] ? U : never
type NonNullableGetReposResponseType = NonNullable<GetReposResponseType>
export type SingleRepoType = ArrayElementType<NonNullableGetReposResponseType>
