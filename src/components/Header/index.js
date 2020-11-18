import React from "react"
import { Link } from "gatsby"

import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.title} to="/">JAM SHOP</Link>
      </div>
    </header>
  )
}
