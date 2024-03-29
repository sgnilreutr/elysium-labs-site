'use client'

import type { ReactNode } from 'react'

import useHasScrolled from '@/hooks/useHasScrolled'
import useHasVerticalScroll from '@/hooks/useHasVerticalScroll'

interface ScrollTransitionWrapperProps {
  children: ReactNode
}

export default function ScrollTransitionWrapper({
  children,
}: ScrollTransitionWrapperProps) {
  const { scrollY } = useHasScrolled()
  const { hasVerticalScroll } = useHasVerticalScroll()

  return (
    <div
      className={`${
        hasVerticalScroll && scrollY > 0 && 'opacity-30'
      } transition-all duration-1000`}
    >
      {children}
    </div>
  )
}
