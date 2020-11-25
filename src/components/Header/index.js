import React from "react"
import { Link } from "gatsby"

import Cart from "components/Cart"
import styles from "./header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
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
