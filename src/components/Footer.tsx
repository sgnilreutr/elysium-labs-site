import React from 'react'
import Link from 'next/link'
import * as global from '../constants/globalConstants'

// const DEVELOPER_SECTION = {
//   name: 'Developers',
//   items: [
//     { name: 'Documentation', link: process.env.NEXT_PUBLIC_DOCS_LINK },
//     {
//       name: 'Contribute',
//       link: 'https://github.com/Elysium-Labs-EU/juno-core#contributing',
//     },
//   ],
// }

const Footer = () => {
  return (
    <footer className="mb-16 md:mb-0 p-8 mt-12 bg- xl:w-full bg-neutral-800 text-neutral-200">
      <div className="max-w-7xl xl:mx-auto xl:w-full">
        <Link href="/">
          © {new Date().getFullYear()}, {global.COMPANY_NAME}
        </Link>
      </div>
    </footer>
  )
}

export default Footer
