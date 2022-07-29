import Footer from "./footer"
import Menu from "./menu"

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <header><Menu /></header>
      <main className="flex flex-col flex-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
