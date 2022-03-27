import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../../public/400x400px_EL_01.jpg'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  max-width: 200px;
  min-width: 200px;
  padding: 0;
  margin: 0;
  margin-bottom: 40px;
  span{box-shadow: 0 3px 6px rgba(0,0,0,.14);}
`

const COMPANY_TITLE1 = 'Elysium '
const COMPANY_TITLE2 = 'Labs;'
const SUB_TITLE = 'Preparing to support your dreams'

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <div>
          <StyledFigure>
            <Image src={Logo} alt="Elysium Labs" />
          </StyledFigure>
          <div>
            <h1>{COMPANY_TITLE1}<span style={{ fontWeight: '600' }}>{COMPANY_TITLE2}</span></h1>
            <h2>{SUB_TITLE}</h2>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
