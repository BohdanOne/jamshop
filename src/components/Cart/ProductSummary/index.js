import React, { useContext } from "react"
import { Link } from "gatsby"

import { CartContext, actionTypes } from "contexts/CartContext"
import Dumy from "assets/products/dumy.svg"
import styles from "./productSummary.module.css"

function ProductSummary({ product }) {
  const { dispatch } = useContext(CartContext)

  const { name, price, id, slug } = product

  function removeFromCart() {
    dispatch({
      type: actionTypes.REMOVE_FROM_CART,
      payload: id,
    })
  }

  return (
    <div className={styles.container}>
      <img className={styles.img} src={Dumy} alt={name} />
      <Link to={`/${slug}`} className={styles.name}>
        {name}
      </Link>
      <span>${price}</span>
      <button
        aria-label={`remove ${name} from cart`}
        className={styles.removeBtn}
        onClick={removeFromCart}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 0C5.83203 0 0 5.83203 0 13C0 20.168 5.83203 26 13 26C20.168 26 26 20.168 26 13C26 5.83203 20.168 0 13 0ZM13 2C19.0859 2 24 6.91406 24 13C24 19.0859 19.0859 24 13 24C6.91406 24 2 19.0859 2 13C2 6.91406 6.91406 2 13 2ZM9.21875 7.78125L7.78125 9.21875L11.5625 13L7.78125 16.7812L9.21875 18.2188L13 14.4375L16.7812 18.2188L18.2188 16.7812L14.4375 13L18.2188 9.21875L16.7812 7.78125L13 11.5625L9.21875 7.78125Z" />
        </svg>
      </button>
    </div>
  )
}

export default ProductSummary
