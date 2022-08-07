import React, { useEffect, useState } from 'react'
import { decodeBase64 } from '../utils/decodeBase64'
import { octokit } from '../pages/_app'

const PackageBodySection = ({
  content,
  title,
  subTitle,
}: {
  content: any
  title: string
  subTitle: string
}) => {
  return (
    <div className="sm:w-screen max-w-prose py-6">
      <p className="font-bold">{title}</p>
      <p className="text-gray-500 mb-2">{subTitle}</p>
      <div className="bg-black text-white mb-10 p-4 rounded-lg">
        <div className="p-4 overflow-auto max-h-72">
          {Object.entries(content).map(([name, value]) => (
            <p key={name} className="my-1 font-semibold">
              {name}:<span className="ml-1 font-normal">{value as string}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

const PackageBody = ({ packageData }: { packageData: any }) => {
  const decoded = decodeBase64(packageData?.content)
  if (decoded) {
    const turnIntoObject = JSON.parse(decoded)
    return (
      <>
        {turnIntoObject?.dependencies && (
          <PackageBodySection
            content={turnIntoObject?.dependencies}
            title="Dependencies"
            subTitle="Main dependencies used for running Juno in production"
          />
        )}
        {turnIntoObject?.devDependencies && (
          <PackageBodySection
            content={turnIntoObject?.devDependencies}
            title="Development dependencies"
            subTitle="Additional dependencies used for the development of Juno"
          />
        )}
      </>
    )
  }
  return <p>Something went wrong</p>
}

const Package = () => {
  const [packageData, setPackageData] = useState<any>(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await octokit.request(
        'GET /repos/{owner}/{repo}/contents/{path}',
        {
          owner: 'Elysium-Labs-EU',
          repo: 'juno-core',
          path: '/package.json',
        }
      )
      if (response?.status === 200) {
        setPackageData(response.data)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      {packageData ? (
        packageData?.content && <PackageBody packageData={packageData} />
      ) : (
        <p>Cannot load content</p>
      )}
    </div>
  )
}

export default Package
