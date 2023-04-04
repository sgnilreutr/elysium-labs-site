import Stack from '@/components/elements/Stack'
import Hero from '@/components/Hero'
import HighlightedProject from '@/components/HighlightedProject'
import Discord from '@/components/infoBlocks/Discord'
import Docs from '@/components/infoBlocks/Docs'
import Layout from '@/components/Layout'
import SEO from '@/components/Seo'

import UspBanner from '@/components/UspBanner'

import type { NextPage } from 'next'

const Seo = {
  title: 'Software organization',
  description: undefined,
}

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO title={Seo.title} description={Seo.description} />
      <Hero />
      <UspBanner />
      <HighlightedProject />
      <Stack
        className="flex flex-row flex-wrap flex-1 py-48 mx-auto max-w-7xl max-h-max md:flex-nowrap"
        spacing="huge"
      >
        <Discord />
        <Docs />
      </Stack>
    </Layout>
  )
}

export default Home

export async function getStaticProps() {
  return {
    props: {},
  }
}
