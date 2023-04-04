interface IGithubDetailData {
  data: number | undefined
  icon: JSX.Element
  title: string
}

const GithubDetailData = ({ data = 0, icon, title }: IGithubDetailData) => {
  return (
    <div className="flex flex-row align-center">
      <div className="py-1">{icon}</div>
      <div className="flex flex-col pl-2">
        <span>{data}</span>
        <span className="text-gray-500">{title}</span>
      </div>
    </div>
  )
}

export default GithubDetailData
