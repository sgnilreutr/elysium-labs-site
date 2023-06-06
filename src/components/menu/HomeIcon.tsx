import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/images/30x30_EL_01.jpg'

const COMPANY_TITLE1 = 'Elysium '
const COMPANY_TITLE2 = 'Labs'

const HomeIcon = () => {
  return (
    <Link href="/" passHref>
      <div className="flex flex-row items-center cursor-pointer">
        <>
          <Image src={Logo} alt="Elysium Labs" className="rounded-[5px]" />
          <span className="hidden ml-2 sm:block">
            {COMPANY_TITLE1}
            <span className="font-[600]">{COMPANY_TITLE2}</span>
          </span>
        </>
      </div>
    </Link>
  )
}

export default HomeIcon
