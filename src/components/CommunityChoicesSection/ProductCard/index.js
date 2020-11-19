import React from "react"

import Dumy from "../../../assets/products/dumy.svg"
import styles from "./productCard.module.css"

function ProductCard({ product }) {
  return (
    <div className={styles.productCard}>
      <img src={Dumy} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductCard
