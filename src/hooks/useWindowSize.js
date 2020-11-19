// solution found here:
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

import { useState, useEffect } from "react"

export default function useWindowSize() {
  const hasWindow = typeof window !== "undefined"

  function getWindowSize() {
    const width = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return { width, height }
  }

  const [windowSize, setWindowSize] = useState(getWindowSize())

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [hasWindow])

  return windowSize
}
