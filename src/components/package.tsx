// import React, { useEffect, useState } from 'react'
// import { decodeBase64 } from '../utils/decodeBase64'
// import { octokit } from '../pages/_app'

// const PackageBodySection = ({
//   content,
//   title,
//   subTitle,
// }: {
//   content: any
//   title: string
//   subTitle: string
// }) => {
//   return (
//     <div className="py-6 sm:w-screen max-w-prose">
//       <p className="font-bold">{title}</p>
//       <p className="mb-2 text-gray-500">{subTitle}</p>
//       <div className="p-4 mb-10 text-white bg-black rounded-lg">
//         <div className="p-4 overflow-auto max-h-72">
//           {Object.entries(content).map(([name, value]) => (
//             <p key={name} className="my-1 font-semibold">
//               {name}:<span className="ml-1 font-normal">{value as string}</span>
//             </p>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// const PackageBody = ({ packageData }: { packageData: any }) => {
//   const decoded = decodeBase64(packageData?.content)
//   if (decoded) {
//     const turnIntoObject = JSON.parse(decoded)
//     return (
//       <>
//         {turnIntoObject?.dependencies && (
//           <PackageBodySection
//             content={turnIntoObject?.dependencies}
//             title="Dependencies"
//             subTitle="Main dependencies used for running Juno in production"
//           />
//         )}
//         {turnIntoObject?.devDependencies && (
//           <PackageBodySection
//             content={turnIntoObject?.devDependencies}
//             title="Development dependencies"
//             subTitle="Additional dependencies used for the development of Juno"
//           />
//         )}
//       </>
//     )
//   }
//   return <p>Something went wrong</p>
// }

// const Package = () => {
//   const [packageData, setPackageData] = useState<any>(null)
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await octokit.request(
//         'GET /repos/{owner}/{repo}/contents/{path}',
//         {
//           owner: 'Elysium-Labs-EU',
//           repo: 'juno-core',
//           path: '/package.json',
//         }
//       )
//       if (response?.status === 200) {
//         setPackageData(response.data)
//       }
//     }
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {packageData ? (
//         packageData?.content && <PackageBody packageData={packageData} />
//       ) : (
//         <p>Cannot load content</p>
//       )}
//     </div>
//   )
// }

// export default Package

export default {}
