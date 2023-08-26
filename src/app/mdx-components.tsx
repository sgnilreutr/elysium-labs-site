import type { MDXComponents } from 'mdx/types'

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => <h1 className="text-center my-8">{children}</h1>,
    h2: ({ children }) => <h2 className="text-center my-8" >{children}</h2>,
    a: ({ children }) => <a className="underline">{children}</a>,
    ...components,
  }
}
