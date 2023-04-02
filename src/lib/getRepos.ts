import { octokit } from '@/pages/_app'
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

type TGetReposResponse = ReturnTypeOf<typeof getRepos>
export type TGetReposResponseType = UnwrapPromise<TGetReposResponse>

type ArrayElementType<T> = T extends (infer U)[] ? U : never
type NonNullableGetReposResponseType = NonNullable<TGetReposResponseType>
export type TSingleRepoType = ArrayElementType<NonNullableGetReposResponseType>
