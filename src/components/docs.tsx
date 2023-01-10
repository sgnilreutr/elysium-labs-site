import { FaBook } from 'react-icons/fa'

const Docs = () => (
  <div className="mx-4 max-w-7xl sm:mx-auto sm:w-full">
    <div className="w-full py-20">
      <a href={process.env.NEXT_PUBLIC_DOCS_LINK ?? ''}>
        <div className="drop-shadow-2xl p-6 mx-4 text-black bg-orange-300 max-w-7xl sm:mx-auto rounded-xl">
          <div className="flex flex-col items-center justify-center my-10 text-center ">
            <div className="my-6">
              <FaBook size={32} />
            </div>
            <h3 className="font-semibold ">Docs</h3>
            <span className="text-gray-600">work in progress</span>

            <div className="flex flex-row flex-wrap justify-center mt-6 text-xl cursor-pointer md:max-w-3xl">
              <p className="mx-1 hover:underline decoration-gray-500">
                Read up on our documentation,
              </p>
              <p className="mx-1 hover:underline decoration-gray-500">
                how to use Juno, and how Juno technically works.
              </p>
            </div>
            <div className="mt-8">
              <button
                className="px-6 py-4 font-semibold text-black transition-all bg-white border border-transparent rounded-lg hover:bg-gray-100 hover:border-black"
                type="button"
              >
                Show the docs
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
)

export default Docs
