import type { ReactNode } from 'react'

import classNames from '@/lib/classNames'

interface ILabel extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const Label = ({ children, ...rest }: ILabel) => {
  return (
    <div
      {...rest}
      className={classNames(
        'rounded-full py-1.5 px-3 border border-dashed border-gray-500 flex items-center justify-center space-x-2  mt-4 sm:mt-10 relative z-10',
        rest.className
      )}
    >
      {children}
    </div>
  )
}

export default Label
