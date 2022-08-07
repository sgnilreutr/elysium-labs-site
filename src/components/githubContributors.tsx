import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { octokit } from '../pages/_app'

const GithubContributors = () => {
  const [contributors, setContributors] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoResponse = await octokit.request('GET /orgs/{org}/repos', {
          org: 'Elysium-Labs-EU',
          type: 'public',
        })
        if (repoResponse?.status === 200) {
          const buffer: any = []
          repoResponse?.data.forEach((repo) =>
            buffer.push(
              octokit.request('GET /repos/{owner}/{repo}/contributors', {
                owner: 'Elysium-Labs-EU',
                repo: repo.name,
              })
            )
          )
          const contributorResponse = await Promise.all(buffer)
          if (
            contributorResponse.some((response) => response?.status === 200)
          ) {
            /**
             * Remove all the bots and duplicate users from the contributors list.
             */
            const users: any = []
            contributorResponse.forEach((dataSet) =>
              dataSet.data.forEach((user: any) => {
                if (
                  users.findIndex((item: any) => item.id === user.id) === -1 &&
                  !user.login.includes('renovate') &&
                  !user.login.includes('dependabot')
                ) {
                  users.push(user)
                }
              })
            )
            console.log(users)
            setContributors(users)
          }
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {contributors ? (
        contributors.map((contributor: any) => (
          <a
            key={contributor?.id}
            href={contributor?.html_url}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={contributor?.avatar_url}
              alt={contributor?.login}
              width="50px"
              height="50px"
            />
          </a>
        ))
      ) : (
        <p>Loading contributors...</p>
      )}
    </div>
  )
}

export default GithubContributors
