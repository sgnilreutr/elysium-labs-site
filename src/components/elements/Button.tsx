import classNames from '@/lib/classNames'
import type { ReactNode } from 'react'

interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button = ({ children, ...rest }: IButton) => {
  return (
    <button
      type="button"
      className={classNames(
        'px-5 py-3 font-semibold text-black transition-all border border-transparent rounded-lg inline-flex items-center',
        rest.className
      )}
    >
      {children}
    </button>
  )
}

export default Button
