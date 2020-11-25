import React, { useRef } from "react"

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import ProductSummary from "../ProductSummary"
import styles from "./cartModal.module.css"

function CartModal({ products, closeModal }) {
  const ref = useRef()
  useOnClickOutside(ref, closeModal)

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <div ref={ref} className={styles.modal}>
          <div>
            {products.length &&
              products.map((product) => (
                <ProductSummary key={product.id} product={product} />
              ))}
          </div>
          <button className={styles.btn}>submit</button>
        </div>
      </div>
    </div>
  )
}

export default CartModal
