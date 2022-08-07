import { useState, useEffect } from 'react'

export default function useHasScrolled() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      // Only update the state whenever the scroll position is 0 or when state is 0 and scrollY is 0.
      if (window.scrollY === 0 || (window.scrollY > 0 && scrollY === 0)) {
        setScrollY(window.scrollY)
      }
    }

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollY])

  return { scrollY }
}
