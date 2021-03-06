// Source here: https://joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion

import { useState, useEffect } from "react"

const QUERY = "(prefers-reduced-motion: no-preference)"

const isRenderingOnServer = typeof window === "undefined"

const getInitialState = () => {
  return isRenderingOnServer ? true : !window.matchMedia(QUERY).matches
}

export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getInitialState,
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)

    const listener = (event) => {
      setPrefersReducedMotion(!event.matches)
    }

    mediaQueryList.addListener(listener)

    return () => {
      mediaQueryList.removeListener(listener)
    }
  }, [])

  return prefersReducedMotion
}
