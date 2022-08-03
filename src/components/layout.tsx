import Footer from './footer'
import Header from './header'

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="flex flex-col h-full w-full bg-gray-100 leading-normal">
      <Header />
      <main className="flex flex-col flex-auto mt-20">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
