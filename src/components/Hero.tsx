import useHasScrolled from '@/hooks/useHasScrolled'
import useHasVerticalScroll from '@/hooks/useHasVerticalScroll'
import Heading from './elements/Heading'
import classNames from '@/lib/classNames'

const COMPANY_TITLE1 = 'Elysium '
const COMPANY_TITLE2 = 'Labs'
const COMPANY_DESCRIPTION = 'Open-source software organization'
const COMPANY_SUB_DESCRIPTION =
  'Elysium Labs is an aspiring vibrant community of open-source software developers, designers, and enthusiasts who are passionate about creating innovative and powerful tools for the benefit of all.'

const Hero = () => {
  const { scrollY } = useHasScrolled()
  const { hasVerticalScroll } = useHasVerticalScroll()
  return (
    <div
      className={classNames(
        'max-w-7xl flex flex-col md:justify-center items-center md:w-full mx-4 md:mx-auto h-96 my-48',
        `${hasVerticalScroll && scrollY > 0 && 'text-gray-200'}`,
        'transition-all duration-1000'
      )}
    >
      <Heading type="h1" className="flex flex-row flex-wrap text-8xl">
        <span className="font-normal md:mr-4">{COMPANY_TITLE1}</span>
        <span>{COMPANY_TITLE2}</span>
      </Heading>
      <Heading
        type="h4"
        weight="font-regular"
        color="text-gray-500"
        className="mt-10 text-4xl"
      >
        {COMPANY_DESCRIPTION}
      </Heading>
      <div className="max-w-prose">
        <Heading
          type="h5"
          weight="font-regular"
          color="text-gray-500"
          className="mt-10 text-xl md:text-center"
        >
          {COMPANY_SUB_DESCRIPTION}
        </Heading>
      </div>
    </div>
  )
}

export default Hero
