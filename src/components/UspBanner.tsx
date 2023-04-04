import Link from 'next/link'

const SUB_TITLE = 'Building software'
const POWERFUL = 'Powerful,'
const EASY_TO_GRASP = 'easy-to-grasp,'
const OPEN_SOURCE = 'and open-source'

const UspBanner = () => {
  return (
    <div className="w-full py-20">
      <div className="p-8 mx-4 text-white bg-black max-w-7xl sm:mx-auto drop-shadow-2xl">
        <div className="my-10 text-3xl text-center">
          <p className="font-semibold">{SUB_TITLE}</p>
          <div className="mt-6">
            <Link href="/principals" passHref>
              <div className="flex flex-row flex-wrap justify-center cursor-pointer">
                <p className="mx-1 hover:underline decoration-gray-500">
                  {POWERFUL}
                </p>
                <p className="mx-1 hover:underline decoration-gray-100">
                  {EASY_TO_GRASP}
                </p>
                <p className="mx-1 hover:underline decoration-orange-500">
                  {OPEN_SOURCE}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UspBanner
