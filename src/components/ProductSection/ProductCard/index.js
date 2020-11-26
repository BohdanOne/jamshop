import React, { useRef, useContext } from "react"
import { navigate } from "gatsby"

import { CartContext, actionTypes } from "contexts/CartContext"
import Dumy from "assets/products/dumy.svg"
import styles from "./productCard.module.css"
import Boop from "components/Boop"

function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext)

  const btnRef = useRef()

  const { name, excerpt, slug } = product

  function goToProductPage(event) {
    if (btnRef.current.contains(event.target)) {
      return
    }
    navigate(slug)
  }

  function addToCart() {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      payload: product,
    })
  }

  return (
    <div
      className={styles.container}
      onClick={(e) => {
        goToProductPage(e)
      }}
    >
      <img className={styles.img} src={Dumy} alt={name} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.excerpt}>{excerpt}</p>
      <button
        ref={btnRef}
        className={styles.addToCartBtn}
        aria-label={`Add ${name} to cart`}
        onClick={addToCart}
      >
        <Boop rotation={30} friction={10} tension={300} scale={1.1}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="22" fill="#AB528D" />
            <path d="M24.8438 20.2656H30.4844V24.3438H24.8438V30.7188H20.5469V24.3438H14.8906V20.2656H20.5469V14.1562H24.8438V20.2656Z" />
          </svg>
        </Boop>
      </button>
    </div>
  )
}

export default ProductCard
