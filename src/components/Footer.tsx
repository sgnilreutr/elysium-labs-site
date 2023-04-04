import React from 'react'
import Link from 'next/link'
import * as global from '../constants/globalConstants'

const DEVELOPER_SECTION = {
  name: 'Developers',
  items: [
    { name: 'Documentation', link: process.env.NEXT_PUBLIC_DOCS_LINK },
    {
      name: 'Contribute',
      link: 'https://github.com/Elysium-Labs-EU/juno-core#contributing',
    },
  ],
}

const Footer = () => {
  return (
    <footer className="p-4 m-8 mx-4 border-2 border-gray-300 border-dashed max-w-7xl xl:mx-auto xl:w-full">
      <Link href="/">
        © {new Date().getFullYear()}, {global.COMPANY_NAME}
      </Link>
    </footer>
  )
}

export default Footer
