import classNames from '@/lib/classNames'

import Stack from './Stack'

import type { ReactNode } from 'react'

interface IInfoBlock extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  href?: string | undefined
}

const InfoBlock = ({ children, href, ...rest }: IInfoBlock) => {
  return (
    <div className="flex justify-center mx-4 max-w-7xl sm:mx-auto sm:w-full">
      <Stack direction="vertical" spacing="huge">
        <a href={href ?? ''} className="flex flex-col flex-1">
          <div
            className={classNames(
              'text-black max-w-7xl sm:mx-auto h-full flex shadow-md',
              rest.className
            )}
          >
            {children}
          </div>
        </a>
      </Stack>
    </div>
  )
}

export default InfoBlock
