import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { octokit } from '../pages/_app'
import Logo from '../../public/images/100x100px_EL_01.jpg'
import { VscPerson, VscRepoForked, VscStarEmpty } from 'react-icons/vsc'
import useHover from '../hooks/useHover'

const DetailData = ({ data, icon, title }: any) => {
  return (
    <div className="flex flex-row align-center">
      <div className="py-1">{icon}</div>
      <div className="flex flex-col pl-2">
        <span>{data}</span>
        <span className="text-gray-500">{title}</span>
      </div>
    </div>
  )
}

const RepoContainer = ({ item }: any) => {
  const [contributors, setContributors] = useState<any>(null)
  const [hasCopied, setHasCopied] = useState(false)
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contributorsResponse = await octokit.request(
          'GET /repos/{owner}/{repo}/contributors',
          {
            owner: 'Elysium-Labs-EU',
            repo: `${item.name}`,
          }
        )
        if (contributorsResponse?.status === 200) {
          setContributors(contributorsResponse.data)
        }
      } catch (err) {
        console.error(err)
      }
    }
    if (item.name) {
      fetchData()
    }
  }, [item.name])

  const clickToCopy = useCallback(async () => {
    if (!navigator.clipboard) {
      alert('Copy functionality not supported')
    }
    try {
      await navigator.clipboard.writeText(item?.clone_url)
      setHasCopied(true)
    } catch (err) {
      console.error('ERROR', err)
    }
  }, [item])

  return (
    <div
      className="p-6 border-2 max-w-2xl my-6 rounded-md relative flex flex-col"
      ref={hoverRef}
    >
      <div
        className={` absolute top-0 left-0 ${
          isHovered ? 'bg-gray-100/80' : 'bg-gray-100/0'
        } h-full w-full z-10 flex justify-center items-center transition-all duration-100`}
      >
        <div
          className={`flex flex-row ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } transition-all duration-600`}
        >
          <button
            className="border border-black p-4 bg-black text-white rounded-lg font-semibold shadow-sm mr-4"
            onClick={clickToCopy}
          >
            {!hasCopied ? 'Clone repo' : 'Link copied'}
          </button>
          <a
            href={item?.html_url}
            target="_blank"
            rel="noreferrer"
            className="border border-black p-4 bg-white text-black rounded-lg font-semibold shadow-sm"
          >
            View on Github
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="max-w-lg pr-6">
          <h4 className="pb-6">
            {item?.owner?.login} /
            <span className="font-bold"> {item?.name}</span>
          </h4>
          <span className="text-gray-500">{item?.description}</span>
        </div>
        <Image
          src={Logo}
          alt={item?.full_name}
          width="100px"
          height="100px"
          style={{ borderRadius: '1rem' }}
        />
      </div>
      <div className="flex flex-row justify-between pt-6 max-w-md">
        {contributors ? (
          <DetailData
            data={contributors.length}
            icon={<VscPerson size={16} />}
            title={'Contributors'}
          />
        ) : (
          <DetailData
            data={0}
            icon={<VscPerson size={16} />}
            title={'Contributors'}
          />
        )}
        <DetailData
          data={item?.stargazers_count}
          icon={<VscStarEmpty size={16} />}
          title={'Stars'}
        />
        <DetailData
          data={item?.forks_count}
          icon={<VscRepoForked size={16} />}
          title={'Forks'}
        />
      </div>
    </div>
  )
}

const GithubRepositories = () => {
  const [repo, setRepo] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const repoResponse = await octokit.request('GET /orgs/{org}/repos', {
          org: 'Elysium-Labs-EU',
          type: 'public',
        })
        if (repoResponse?.status === 200) {
          setRepo(repoResponse?.data)
        }
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col items-center">
      <h2>Github</h2>
      <h4 className="text-gray-500">
        The organization maintains these repositories
      </h4>
      <div>
        {repo ? (
          repo?.map((item: any) => (
            <RepoContainer key={item?.name} item={item} />
          ))
        ) : (
          <p className="py-6">Loading Github repositories...</p>
        )}
      </div>
    </div>
  )
}

export default GithubRepositories
