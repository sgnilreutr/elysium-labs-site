import type { ReactNode } from 'react'
import Footer from './Footer'
import PageHeader from './PageHeader'

interface ILayout {
  children: ReactNode
}

const Layout = ({ children }: ILayout) => {
  return (
    <div className="flex flex-col h-full leading-normal bg-gray-100 md:w-full">
      <PageHeader />
      <main className="flex flex-col mt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
