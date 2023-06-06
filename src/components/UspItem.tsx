interface UspItemProps {
  body: string
  header: string
  icon: JSX.Element
}

const UspItem = ({ body, header, icon }: UspItemProps) => {
  return (
    <div className="flex flex-col items-center max-w-md p-8 text-center text-black bg-transparent border shadow-sm border-neutral-200">
      <div>{icon}</div>
      <h3 className="mt-3 mb-1 text-2xl">{header}</h3>
      <span className="text-gray-600">{body}</span>
    </div>
  )
}

export default UspItem
