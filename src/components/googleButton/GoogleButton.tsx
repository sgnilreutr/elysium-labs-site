import { FcGoogle } from 'react-icons/fc'

const GOOGLE = 'Login with Google'

const GoogleButton = () => {
  return (
    <a
      href={process.env.NEXT_PUBLIC_JUNO_GOOGLE_LOGIN}
      target="_blank"
      className="flex flex-row items-center px-3 font-semibold text-white transition-all bg-black rounded-md h-14 hover:bg-neutral-800 bg:shadow-lg"
      rel="noreferrer"
    >
      <div className="p-1">
        <FcGoogle size={20} />
      </div>
      {GOOGLE}
    </a>
  )
}

export default GoogleButton
