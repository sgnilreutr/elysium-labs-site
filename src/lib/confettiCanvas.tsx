import type { CSSProperties } from 'react'
import React, { useCallback, useEffect, useRef } from 'react'
import ReactCanvasConfetti from 'react-canvas-confetti'

const canvasStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
}

interface ConfettiCanvasProps {
  triggerFire: boolean
}

export default function ConfettiCanvas({ triggerFire }: ConfettiCanvasProps) {
  const refAnimationInstance = useRef<confetti.CreateTypes | null>(null)

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refAnimationInstance.current = instance
  }, [])

  const makeShot = useCallback(
    (particleRatio: number, opts: Record<string, number>) => {
      if (!refAnimationInstance.current) {
        return
      }
      void refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      })
    },
    []
  )

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    })

    makeShot(0.2, {
      spread: 60,
    })

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    })
  }, [makeShot])

  useEffect(() => {
    if (triggerFire) {
      fire()
    }
  }, [triggerFire, fire])

  return <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
}
