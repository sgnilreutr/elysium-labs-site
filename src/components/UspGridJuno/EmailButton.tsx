interface IEmailButton {
  label: string
  icon: JSX.Element
  onClick: () => void
}

const EmailButton = ({ label, icon, onClick }: IEmailButton) => {
  return (
    <button
      type="button"
      className="py-[6px] px-[12px] text-sm transition-all ease-in-out border border-transparent rounded-md text-neutral-400 hover:text-black hover:border-neutral-600"
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
