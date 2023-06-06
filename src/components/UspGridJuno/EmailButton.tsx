import classNames from '@/lib/classNames'

interface EmailButtonProps {
  label: string
  icon: JSX.Element
  onClick: () => void
  currentCardIndex?: number
}

const EmailButton = ({
  label,
  icon,
  onClick,
  currentCardIndex,
}: EmailButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        'py-[6px] px-[12px] text-sm transition-all ease-in-out border border-transparent rounded-md',
        `${currentCardIndex === 0
          ? 'animate-bounce hover:animate-none text-neutral-500 animate-pulse hover:border-neutral-600'
          : 'text-neutral-400 hover:text-black hover:border-neutral-600'
        }`
      )}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="mr-2 text-center">{icon}</div>
        <span>{label}</span>
      </div>
    </button>
  )
}

export default EmailButton
