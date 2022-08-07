import React from 'react'
import Link from 'next/link'
import * as global from '../constants/globalConstants'

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-4 xl:mx-auto xl:w-full m-8 border-2 border-dashed p-6 border-gray-300">
      <Link href="/">
        <a>
          © {new Date().getFullYear()}, {global.COMPANY_NAME}
        </a>
      </Link>
    </footer>
  )
}

export default Footer
