import classNames from '@/lib/classNames'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import type { ReactNode } from 'react'

interface IInlineLink extends LinkProps {
  children: ReactNode
  className?: string
  href: string
}

const InlineLink = ({ children, href, ...rest }: IInlineLink) => {
  return (
    <Link
      {...rest}
      href={href}
      className={classNames('font-semibold hover:underline', rest.className)}
    >
      {children}
    </Link>
  )
}

export default InlineLink
