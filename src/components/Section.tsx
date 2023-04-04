import type { ReactNode } from 'react'
import Header from './elements/Header'

interface ISection extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  header?: ReactNode
}

const Section = ({ children, header, ...rest }: ISection) => {
  return (
    <section {...rest} className={rest.className}>
      {header ? (
        <Header
          className="py-10 text-3xl text-center"
          color="text-gray-500"
          type="h3"
          weight="font-regular"
        >
          {header}
        </Header>
      ) : null}
      {children}
    </section>
  )
}

export default Section
