import { useEffect, useState } from 'react'

/**
 * @function useHasVerticalScroll
 * @returns a value of true and false. It will only run the first time when the document is loaded.
 */

export default function useHasVerticalScroll() {
  const [hasVerticalScroll, setHasVerticalScroll] = useState(false)
  useEffect(() => {
    if (document.body.clientHeight > window.innerHeight) {
      setHasVerticalScroll(true)
      return
    }
    setHasVerticalScroll(false)
  }, [])

  return { hasVerticalScroll }
}
