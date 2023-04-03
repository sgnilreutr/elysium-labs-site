import classNames from '@/lib/classNames'
import type { ReactNode } from 'react'

type TAnimation = 'slideUpAndFade' | 'none'
type TColor = 'black' | 'text-gray-500'
type THeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
type TWeight = 'font-regular' | 'font-semibold'

interface IHeader extends React.HTMLAttributes<HTMLHeadingElement> {
  animation?: TAnimation
  children: ReactNode
  color?: TColor
  type: THeaderType
  weight?: TWeight
}

const colorToClass: Record<TColor, string> = {
  black: 'text-black',
  'text-gray-500': 'text-gray-500',
}

const weightToClass: Record<TWeight, string> = {
  'font-regular': 'font-normal',
  'font-semibold': 'font-semibold',
}

const animationToClass: Record<TAnimation, string> = {
  slideUpAndFade: 'animate-slideUpAndFade',
  none: 'animate-none',
}

const Header = ({
  children,
  type,
  color = 'black',
  weight = 'font-semibold',
  animation = 'slideUpAndFade',
  ...rest
}: IHeader) => {
  const animationClass = animationToClass[animation]
  const colorClass = colorToClass[color]
  const weightClass = weightToClass[weight]

  switch (type) {
    case 'h1':
      return (
        <h1
          className={classNames(
            animationClass,
            colorClass,
            weightClass,
            rest.className
          )}
        >
          {children}
        </h1>
      )
    case 'h2':
      return (
        <h2
          className={classNames(
            animationClass,
            colorClass,
            weightClass,
            rest.className
          )}
        >
          {children}
        </h2>
      )
    case 'h3':
      return (
        <h3 className={classNames(colorClass, weightClass, rest.className)}>
          {children}
        </h3>
      )
    case 'h4':
      return (
        <h4 className={classNames(colorClass, weightClass, rest.className)}>
          {children}
        </h4>
      )
    case 'h5':
      return (
        <h5 className={classNames(colorClass, weightClass, rest.className)}>
          {children}
        </h5>
      )
  }
}

export default Header
