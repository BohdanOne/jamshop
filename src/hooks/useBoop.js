// Source here: https://www.joshwcomeau.com/react/boop/

import { useState, useEffect, useCallback } from "react"
import { useSpring } from "react-spring"

import { usePrefersReducedMotion } from "./usePrefersReducedMotion"

export const useBoop = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1.1,
  timing = 150,
  springConfig = { tension: 300, friction: 10 },
}) => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const [isBooped, setIsBooped] = useState(false)

  const style = useSpring({
    display: "inline-block",
    transform: isBooped
      ? `translate3d(${x}px, ${y}px, 0px) rotate(${rotation}deg) scale(${scale})`
      : "translate3d(0px, 0px, 0px) rotate(0deg) scale(1)",
    config: springConfig,
  })

  useEffect(() => {
    if (!isBooped) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, timing)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBooped, timing])

  const trigger = useCallback(() => {
    setIsBooped(true)
  }, [])

  const applicableStyle = prefersReducedMotion ? {} : style

  return [applicableStyle, trigger]
}
