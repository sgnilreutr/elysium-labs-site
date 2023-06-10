import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

import assertNonNullish from '@/lib/assertNonNullish'
import ConfettiCanvas from '@/lib/confettiCanvas'
import Botpoison from '@botpoison/browser'
import { useFormspark } from '@formspark/use-formspark'
import classNames from '@/lib/classNames'

if (process.env.NODE_ENV === 'production') {
  assertNonNullish(
    process.env.NEXT_PUBLIC_BOTPOISON_PUBLIC_KEY,
    'Botpoison PK not found'
  )
}
const botpoison = new Botpoison({
  publicKey: process.env.NEXT_PUBLIC_BOTPOISON_PUBLIC_KEY ?? '',
})

const FORMSPARK_FORM_ID = process.env.NEXT_PUBLIC_FORMSPARK_FORM_ID

const BetaAccesForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID ?? '',
  })
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { solution } = await botpoison.challenge()
      await submit({ message, _botpoison: solution })
      setComplete(true)
    } catch (err) {
      setError(true)
    }
  }

  return (
    <>
      <ConfettiCanvas triggerFire={complete} />
      <div>
        {!open ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="px-4 py-2 h-10 font-semibold text-orange-900 transition-all bg-orange-300 rounded-lg shadow-sm hover:bg-orange-400"
          >
            Request access
          </button>
        ) : null}
        {open ? (
          <form
            onSubmit={onSubmit}
            className={classNames(
              'flex sm:flex-row border-gray-400 sm:w-screen max-w-lg items-center border p-1 rounded-md b-2',
              `${!complete ? 'justify-between' : 'justify-center'}`
            )}
          >
            {!complete ? (
              <>
                <input
                  type="email"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="pl-2 mr-4 bg-gray-100 outline-none h-10 outline-0 grow"
                  placeholder="enter your email"
                  autoFocus={open}
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 h-10 font-semibold text-white transition-all bg-orange-400 rounded-lg shadow-sm hover:bg-orange-500"
                >
                  Request access
                </button>
              </>
            ) : null}
            {complete ? (
              <div className="flex flex-row items-center h-14">
                <FiCheck size={20} />
                <span className="ml-4">You will be contacted shortly</span>
              </div>
            ) : null}
          </form>
        ) : null}
      </div>
      {error ? (
        <span className="mb-4 text-orange-600">
          Something went wrong, reach out to us on{' '}
          <a
            href={process.env.NEXT_PUBLIC_DISCORD_INVITE_LINK}
            className="underline"
          >
            Discord
          </a>
        </span>
      ) : null}
    </>
  )
}

export default BetaAccesForm
