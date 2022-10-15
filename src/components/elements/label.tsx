import React from 'react'

const Label = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="rounded-md py-1.5 px-3 border border-dashed border-gray-600 flex items-center justify-center space-x-2  mt-4 sm:mt-10 relative z-10">
      {children}
    </div>
  )
}

export default Label
