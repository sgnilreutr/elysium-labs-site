import '../styles/globals.css'
import '../styles/typography.css'
import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { Heading, Hyperlink, Text } from '../components/elements/mdxElements'
import { Octokit } from '@octokit/core'

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  p: Text,
  a: Hyperlink,
}

export const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
