import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Cart from "components/Cart"
import styles from "./header.module.css"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const HEADER_HEIGHT = 60

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > HEADER_HEIGHT
      if (isScrolled !== scrolled) {
        setScrolled((scrolled) => !scrolled)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header data-scrolled={scrolled} className={styles.header}>
      <div className={styles.container}>
        <div>
          <Link className={styles.title} to="/">
            JAM SHOP
          </Link>
        </div>
        <Cart />
      </div>
    </header>
  )
}
