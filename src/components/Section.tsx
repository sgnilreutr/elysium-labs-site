import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import Heading from './elements/Heading'

interface SectionProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
  header?: ReactNode
}

const Section = ({ children, header, ...rest }: SectionProps) => {
  return (
    <section {...rest} className={rest.className}>
      {header ? (
        <Heading
          className="py-10 text-3xl text-center"
          color="text-gray-500"
          type="h3"
          weight="font-regular"
        >
          {header}
        </Heading>
      ) : null}
      {children}
    </section>
  )
}

export default Section
