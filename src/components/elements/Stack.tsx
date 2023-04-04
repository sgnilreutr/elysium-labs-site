import classNames from '@/lib/classNames'

type TStackSpacing =
  | 'none'
  | 'px'
  | 'mini'
  | 'small'
  | 'default'
  | 'large'
  | 'huge'

type TStackAlignment = 'start' | 'center' | 'end' | 'stretch' | 'between'

type TStack = {
  direction?: 'vertical' | 'horizontal'
  justify?: TStackAlignment
  spacing?: TStackSpacing
  align?: TStackAlignment
  wrap?: boolean
} & React.HTMLAttributes<HTMLDivElement>

const Stack = ({
  direction = 'horizontal',
  spacing = 'default',
  justify = 'stretch',
  align = 'stretch',
  children,
  wrap,
  ...rest
}: TStack) => {
  const spacingToGap: Record<TStackSpacing, string> = {
    px: 'px',
    none: '0',
    mini: '1',
    small: '2',
    default: '3',
    large: '4',
    huge: '5',
  }

  const spacingAmount = spacingToGap[spacing]

  return (
    <div
      {...rest}
      className={classNames(
        `flex items-${align} justify-${justify} gap-${spacingAmount}`,
        direction === 'horizontal' ? 'flex-row' : 'flex-col',
        wrap && 'flex-wrap',
        rest.className
      )}
    >
      {children}
    </div>
  )
}

export default Stack
