import '../styles/globals.css'
import '../styles/typography.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { Heading, Text } from '../components/elements/mdxElements'

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
