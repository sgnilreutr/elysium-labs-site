import { FaCommentDots } from 'react-icons/fa'

const Feedback = () => (
  <div className="mx-4 max-w-7xl sm:mx-auto sm:w-full">
    <div className="w-full py-20">
      <a href={process.env.NEXT_PUBLIC_JUNO_FEEDBACK_LINK ?? ''}>
        <div className="p-6 mx-4 text-black border-[1px] border-gray-300 max-w-7xl sm:mx-auto rounded-xl bg-white">
          <div className="flex flex-col items-center justify-center my-10 text-center ">
            <div className="my-6">
              <FaCommentDots size={32} />
            </div>
            <h3 className="font-semibold ">Feedback</h3>

            <div className="flex flex-row flex-wrap justify-center mt-6 text-xl cursor-pointer md:max-w-3xl">
              <p className="mx-1 hover:underline decoration-gray-500">
                Provide feedback and steer the development of Juno.
              </p>
            </div>
            <div className="mt-8">
              <button
                className="px-6 py-4 font-semibold text-black transition-all bg-gray-500 border border-transparent rounded-lg hover:bg-gray-100 hover:border-black"
                type="button"
              >
                I&apos;ll give feedback
              </button>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
)

export default Feedback
