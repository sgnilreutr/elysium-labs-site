import Stack from '@/components/elements/Stack'
import Hero from '@/components/Hero'
import HighlightedProject from '@/components/HighlightedProject'
import Discord from '@/components/infoBlocks/Discord'
import Docs from '@/components/infoBlocks/Docs'
import { Metadata } from 'next/types'

// import UspBanner from '@/components/UspBanner'

export const metadata: Metadata = {
  title: 'Software organization',
  description: undefined,
}

export default function Home() {
  return (
    <>
      <Hero />
      <HighlightedProject />
      <Stack
        className="flex flex-row flex-wrap flex-1 py-48 mx-auto max-w-7xl max-h-max md:flex-nowrap"
        spacing="huge"
      >
        <Discord />
        <Docs />
      </Stack>
    </>
  )
}
