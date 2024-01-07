'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'
import { VscPerson, VscRepoForked, VscStarEmpty } from 'react-icons/vsc'

import useHover from '@/hooks/useHover'
import classNames from '@/lib/classNames'
import copyToClipboard from '@/lib/copyToClipboard'
import type { SingleContributorsEntryType } from '@/lib/getContributorsInformation'
import type { SingleRepoType } from '@/lib/getRepos'

import {
  GITHUB_REPO_COPY_PRE,
  GITHUB_REPO_COPY_AFTER,
  GITHUB_REPO_VIEW,
} from './GithubConstants'
import GithubDetailData from './GithubDetailData'
import Logo from '../../../public/images/100x100px_EL_01.jpg'
type Repository = SingleRepoType & {
  contributors: Array<SingleContributorsEntryType>
}

interface RepoContainerProps {
  repository: Repository
}

const RepoContainer = ({ repository }: RepoContainerProps) => {
  const [hasCopied, setHasCopied] = useState(false)
  const [hoverRef, isHovered] = useHover<HTMLDivElement>()

  const clickToCopy = useCallback(async () => {
    if (!repository.clone_url) {
      return
    }
    const response = await copyToClipboard({ toCopyItem: repository.clone_url })
    if (!response) {
      return
    }
    setHasCopied(response)
  }, [repository])

  return (
    <div
      className="relative flex flex-col max-w-2xl p-6 border-2 rounded-md"
      ref={hoverRef}
    >
      <div
        className={classNames(
          'absolute top-0 left-0',
          isHovered ? 'bg-gray-100/80' : 'bg-gray-100/0',
          'h-full md:w-full z-10 flex justify-center items-center transition-all duration-100'
        )}
      >
        <div
          className={`flex flex-row ${
            isHovered ? 'opacity-100' : 'opacity-0'
          } transition-all duration-600`}
        >
          <button
            className="p-4 mr-4 font-semibold text-white bg-black border border-black rounded-lg shadow-sm"
            onClick={() => void clickToCopy()}
          >
            {!hasCopied ? GITHUB_REPO_COPY_PRE : GITHUB_REPO_COPY_AFTER}
          </button>
          <a
            href={repository.html_url}
            target="_blank"
            rel="noreferrer"
            className="p-4 font-semibold text-black bg-white border border-black rounded-lg shadow-sm"
          >
            {GITHUB_REPO_VIEW}
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <div className="max-w-lg pr-6">
          <h4 className="pb-6 text-xl">
            {repository.owner.login} /
            <span className="font-bold"> {repository.name}</span>
          </h4>
          <span className="text-gray-500">{repository.description}</span>
        </div>
        <div className="hidden sm:block">
          <Image
            src={Logo}
            alt={repository.full_name}
            width="100"
            height="100"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-row justify-between max-w-md pt-6">
        <GithubDetailData
          data={repository.contributors.length}
          icon={<VscPerson size={16} />}
          title="Contributors"
        />
        <GithubDetailData
          data={repository.stargazers_count}
          icon={<VscStarEmpty size={16} />}
          title="Stars"
        />
        <GithubDetailData
          data={repository.forks_count}
          icon={<VscRepoForked size={16} />}
          title="Forks"
        />
      </div>
    </div>
  )
}

export default RepoContainer
