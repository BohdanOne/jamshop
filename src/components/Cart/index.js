import React, { useState, useContext } from "react"

import { CartContext } from "../../contexts/CartContext"
import CartModal from "./CartModal"
import styles from "./cart.module.css"

function Cart() {
  const [isOpen, setIsOpen] = useState()

  const { products } = useContext(CartContext)

  function openCart() {
    if (isOpen || !products.length) {
      return
    }
    setIsOpen(true)
  }

  function closeCart() {
    setIsOpen(false)
  }

  return (
    <>
      <div
        className={`${styles.cart} ${isOpen ? styles.cartOpen : null}`}
        onMouseDown={openCart}
      >
        <div className={styles.cartIcon}>
          <div
            className={`${styles.counter} ${
              products.length ? styles.notEmpty : null
            }`}
          >
            {products.length}
          </div>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                className={styles.iconPath}
                d="M.445 10.844c.397-.497.99-.782 1.631-.782h5.778l3.133-7.174a.879.879 0 111.61.703l-2.825 6.47h10.456l-2.825-6.47a.879.879 0 111.61-.703l3.133 7.174h5.778c.64 0 1.235.285 1.63.782.39.488.533 1.115.394 1.721l-3.085 13.476a2.06 2.06 0 01-2.024 1.599H5.16a2.06 2.06 0 01-2.024-1.599L.052 12.565a2.024 2.024 0 01.393-1.721zm4.716 15.038H24.84c.149 0 .28-.098.31-.233l3.086-13.476a.269.269 0 00-.055-.234.32.32 0 00-.256-.12h-5.01l.23.528a.879.879 0 01-1.61.703l-.538-1.23H9.004l-.537 1.23a.88.88 0 11-1.611-.703l.23-.528h-5.01a.32.32 0 00-.256.12.269.269 0 00-.055.234L4.85 25.649c.031.135.162.233.311.233z"
              />
              <path
                className={styles.iconPath}
                d="M20.273 15.628c.486 0 .88.393.88.879v6.445a.879.879 0 01-1.758 0v-6.445c0-.486.393-.879.878-.879zM15 15.628c.485 0 .879.393.879.879v6.445a.879.879 0 01-1.758 0v-6.445c0-.486.394-.879.879-.879zM9.727 15.628c.485 0 .878.393.878.879v6.445a.879.879 0 01-1.757 0v-6.445c0-.486.393-.879.879-.879z"
              />
            </g>
          </svg>
        </div>
        {products.length > 0 && (
          <svg
            className={styles.arrow}
            width="11"
            height="9"
            viewBox="0 0 11 9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={styles.iconStroke}
              d={isOpen ? "M1 8L5.5 2L10 8" : "M10 1L5.5 7L1 1"}
            />
          </svg>
        )}
      </div>
      {isOpen && <CartModal products={products} closeModal={closeCart} />}
    </>
  )
}

export default Cart
