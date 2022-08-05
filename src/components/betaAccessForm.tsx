import React, { useState } from 'react'
import { useFormspark } from '@formspark/use-formspark'

const FORMSPARK_FORM_ID = process.env.FORMSPARK_FORM_ID

const BetaAccesForm = ({ scrollY }: { scrollY: number }) => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID ?? '',
  })

  const [message, setMessage] = useState('')

  const onSubmit = async (e: any) => {
    e.preventDefault()
    const response = await submit({ message })
    console.log(response)
    // alert('Form submitted')
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`flex flex-row w-screen max-w-2xl items-center shadow-sm p-2 my-6 bg-gray-200 rounded-lg b-2 mt-14 justify-between ${
        scrollY > 0 && 'shadow-lg sticky top-16'
      } transition-all duration-1000`}
    >
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="h-14 mr-4 bg-gray-200 pl-2 outline-0 grow"
        placeholder="enter your email"
      />
      <button
        type="submit"
        disabled={submitting}
        className="p-4 bg-orange-400 rounded-lg font-semibold text-white shadow-sm"
      >
        Request access
      </button>
    </form>
  )
}

export default BetaAccesForm
