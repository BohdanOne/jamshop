import React from "react"

import Dumy from "../../../assets/products/dumy.svg"
import styles from "./productCard.module.css"

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img className={styles.cardImg} src={Dumy} alt={product.name} />
      <h3 className={styles.cardTitle}>{product.name}</h3>
      <p className={styles.cardTxt}>{product.excerpt}</p>
      <button
        className={styles.addToCartBtn}
        aria-label={`Add ${product.name} to cart`}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="22" cy="22" r="22" fill="#AB528D" />
          <path d="M24.8438 20.2656H30.4844V24.3438H24.8438V30.7188H20.5469V24.3438H14.8906V20.2656H20.5469V14.1562H24.8438V20.2656Z" />
        </svg>
      </button>
    </div>
  )
}

export default ProductCard
