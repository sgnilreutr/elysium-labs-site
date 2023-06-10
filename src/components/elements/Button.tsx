import classNames from '@/lib/classNames'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode
}

const Button = ({ children, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button
      type={type}
      className={classNames(
        'px-4 py-2 h-10 font-semibold text-black transition-all border border-transparent rounded-lg inline-flex items-center',
        rest.className
      )}
    >
      {children}
    </button>
  )
}

export default Button
