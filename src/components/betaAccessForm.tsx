import React, { useState } from 'react'
import { useFormspark } from '@formspark/use-formspark'
import { FiCheck } from 'react-icons/fi'

const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID

const BetaAccesForm = ({ scrollY }: { scrollY: number }) => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID ?? '',
  })
  const [complete, setComplete] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)

  const onSubmit = async (e: any) => {
    e.preventDefault()
    try {
      console.log(message)
      console.log(FORMSPARK_FORM_ID)
      const response = await submit({ message })
      console.log(response)
      setComplete(true)
    } catch (err) {
      setError(true)
    }
    // alert('Form submitted')
  }

  return (
    <>
      <form
        onSubmit={onSubmit}
        className={`flex flex-row w-screen max-w-2xl items-center shadow-sm p-2 my-6 bg-gray-200 rounded-lg b-2 mt-14 ${ !complete ? 'justify-between' : 'justify-center'
          } ${ scrollY > 0 && 'shadow-lg md:sticky top-16 md:z-50'
          } transition-all duration-1000`}
      >
        {!complete && (
          <>
            <input
              type="email"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-14 mr-4 bg-gray-200 pl-2 outline-0 grow"
              placeholder="enter your email"
            />
            <button
              type="submit"
              disabled={submitting}
              className="p-4 bg-orange-400 hover:bg-orange-500 rounded-lg font-semibold text-white shadow-sm transition-all"
            >
              Request access
            </button>
          </>
        )}
        {complete && (
          <div className="flex flex-row items-center h-14">
            <FiCheck size={20} />
            <span className="ml-4">You will be contacted shortly</span>
          </div>
        )}
      </form>
      {error && (
        <span className="text-orange-600 mb-4">
          Something went wrong, reach out to us on{' '}
          <a
            href="https://join.slack.com/t/slack-pfs5354/shared_invite/zt-1dnnwr9wn-njkaaxES_sUWywV2~JANjg"
            className="underline"
          >
            Slack
          </a>
        </span>
      )}
    </>
  )
}

export default BetaAccesForm
