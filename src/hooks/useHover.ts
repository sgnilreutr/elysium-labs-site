import type { MutableRefObject } from 'react'
import { useState, useRef, useEffect } from 'react'

/**
 * @function useHover
 * The hook is configured by adding a ref to the object on the component to which it connects.
 * @returns the ref of the object and a boolean indicating whether the object is hovered or not.
 */

export default function useHover<T extends HTMLElement>(): [
  MutableRefObject<T | null>,
  boolean
] {
  const [value, setValue] = useState<boolean>(false)

  const ref = useRef<T | null>(null)

  const handleMouseOver = (): void => setValue(true)
  const handleMouseOut = (): void => setValue(false)

  useEffect(() => {
    const node = ref.current
    if (node) {
      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)

      return () => {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return [ref, value]
}
