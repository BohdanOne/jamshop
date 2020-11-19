import React from "react"

function ProductListArrow({ direction }) {
  return (
    <div>
      <svg
        width="65"
        height="65"
        viewBox="0 0 65 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="32.5"
          cy="32.5"
          r="31"
          transform="rotate(-180 32.5 32.5)"
          fill="white"
          fillOpacity="0.05"
          stroke="white"
          strokeWidth="3"
        />
        {direction === "left" ? (
          <path d="M39 45L22 32L39 19" stroke="white" strokeWidth="4" />
        ) : (
          <path d="M26 20L43 33L26 46" stroke="white" strokeWidth="4" />
        )}
      </svg>
    </div>
  )
}

export default ProductListArrow
