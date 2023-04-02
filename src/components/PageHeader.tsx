import useHasScrolled from '../hooks/useHasScrolled'
import Menu from './menu/Menu'
import classNames from '@/lib/classNames'

const PageHeader = () => {
  const { scrollY } = useHasScrolled()

  return (
    <header
      className={classNames(
        'fixed top-0 left-0 z-20 w-full p-4 border-b',
        `${scrollY > 0 ? 'border-gray-300' : 'border-transparent'}`,
        'bg-gray-100/80 transition-all duration-200 backdrop-blur-lg'
      )}
    >
      <Menu />
    </header>
  )
}

export default PageHeader
