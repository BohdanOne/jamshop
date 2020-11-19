import React from "react"

import Dumy from "../../../assets/products/dumy.svg"
import styles from "./productSummary.module.css"

function ProductSummary({ product }) {
  return (
    <div className={styles.productSummary}>
      <img className={styles.img} src={Dumy} alt={product.name} />
      <span>{product.name}</span>
      <span>${product.price}</span>
    </div>
  )
}

export default ProductSummary
