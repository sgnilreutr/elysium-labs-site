import React from 'react'

const Label = ({ children }: { children: JSX.Element }) => {
  return (
    <div className="rounded-md py-1.5 px-3 border border-dashed border-gray-900 flex items-center space-x-2  mt-4 sm:mt-10 z-20">
      {children}
    </div>
  )
}

export default Label
