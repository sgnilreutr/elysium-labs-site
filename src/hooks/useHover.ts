import { useState, useRef, useEffect, MutableRefObject } from 'react'

/**
 * @function useHover
 * The hook is configured by adding a ref to the object on the component to which it connects.
 * @returns the ref of the object and a boolean indicating whether the object is hovered or not.
 */

export default function useHover<T>(): [MutableRefObject<T>, boolean] {
  const [value, setValue] = useState<boolean>(false)

  const ref: any = useRef<T | null>(null)

  const handleMouseOver = (): void => setValue(true)
  const handleMouseOut = (): void => setValue(false)

  useEffect(
    () => {
      const node: any = ref.current
      if (node) {
        node.addEventListener('mouseover', handleMouseOver)
        node.addEventListener('mouseout', handleMouseOut)

        return () => {
          node.removeEventListener('mouseover', handleMouseOver)
          node.removeEventListener('mouseout', handleMouseOut)
        }
      }
    },
    [ref.current] // Recall only if ref changes
  )

  return [ref, value]
}
