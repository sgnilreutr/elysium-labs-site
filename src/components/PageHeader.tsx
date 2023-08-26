'use client'

import useHasScrolled from '../hooks/useHasScrolled'
import Menu from './menu/Menu'
import classNames from '@/lib/classNames'

const PageHeader = () => {
  const { scrollY } = useHasScrolled()

  return (
    <header
      className={classNames(
        'fixed bottom-0 md:top-0 md:bottom-[unset] left-0 z-20 md:w-full p-4 border-t md:border-t-0 md:border-b w-full',
        `${scrollY > 0
          ? 'border-gray-300 bg-gray-100/80'
          : 'md:border-transparent bg-transparent'
        }`,
        'transition-all duration-200 backdrop-blur-lg'
      )}
    >
      <Menu />
    </header>
  )
}

export default PageHeader
