import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`

const Layout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <Wrapper>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Elysium Labs
        {` `}
      </footer>
    </Wrapper>
  )
}

export default Layout
