import React, { useEffect, useState } from 'react'
import { octokit } from '../pages/_app'

const AboutOrganization = () => {
  const [packageData, setPackageData] = useState<any>(null)
  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('https://github.com/Elysium-Labs-EU/juno-core/blob/dev/package.json')
      // const response = await octokit.request("GET /orgs/{org}/repos", {
      //     org: "Elysium-Labs-EU",
      //     type: "public",
      // });
      // console.log(response)
      // const response2 = await octokit.request('GET /repos/{owner}/{repo}/contributors', {
      //     owner: 'Elysium-Labs-EU',
      //     repo: 'juno-core'
      // })
      // console.log(response2)
      const response3 = await octokit.request(
        'GET /repos/{owner}/{repo}/contents/{path}',
        {
          owner: 'Elysium-Labs-EU',
          repo: 'juno-core',
          path: '/package.json',
        }
      )
      console.log(response3)
      if (response3?.status === 200) {
        setPackageData(response3.data)
      }
    }
    fetchData()
  }, [])

  return <div>AboutOrganization</div>
}

export default AboutOrganization
