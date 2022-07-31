import React from 'react'
import Link from 'next/link'
import * as global from '../constants/globalConstants'

const Footer = () => {
  return (
    <footer className="max-w-7xl w-full mx-auto m-8 border-2 border-dashed p-6">
      <Link href="/">
        <a>
          © {new Date().getFullYear()}, {global.COMPANY_NAME}
        </a>
      </Link>
    </footer>
  )
}

export default Footer
