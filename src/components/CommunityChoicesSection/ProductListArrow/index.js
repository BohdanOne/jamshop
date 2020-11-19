import React from "react"

import styles from "./productListArrow.module.css"

function ProductListArrow({ direction, onClick }) {
  return (
    <button
      onClick={onClick}
      className={styles.arrowContainer}
      aria-label={`move list to the ${direction}`}
    >
      <svg
        width="65"
        height="65"
        viewBox="0 0 65 65"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32.5"
          cy="32.5"
          r="31"
          stroke="white"
          strokeWidth="3"
        />
        {direction === "left" ? (
          <path d="M39 45L22 32L39 19" stroke="white" strokeWidth="4" />
        ) : (
          <path d="M26 20L43 33L26 46" stroke="white" strokeWidth="4" />
        )}
      </svg>
    </button>
  )
}

export default ProductListArrow
