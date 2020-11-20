import { useEffect } from "react"

function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }

    document.addEventListener("mousedown", listener, true)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener, true)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

export default useOnClickOutside
