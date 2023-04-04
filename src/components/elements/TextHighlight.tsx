import type { ReactNode } from 'react'

interface ITextHighlight {
  children: ReactNode
}

const TextHighlight = ({ children }: ITextHighlight) => {
  return <span className="bg-orange-100">{children}</span>
}

export default TextHighlight
