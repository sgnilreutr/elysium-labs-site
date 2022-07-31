import React, { useEffect, useState } from 'react'
import useHasScrolled from '../hooks/useHasScrolled'
import Menu from './menu'

const Header = () => {
  const { scrollY } = useHasScrolled()

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full p-4 border-b ${
        scrollY > 0 ? 'border-gray-200' : 'border-transparent'
      } bg-gray-100/80 transition-all duration-200 backdrop-blur-lg`}
    >
      <Menu />
    </header>
  )
}

export default Header
