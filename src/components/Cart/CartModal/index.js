import React, { useRef } from "react"
import { useSpring, animated } from "react-spring"

import useOnClickOutside from "hooks/useOnClickOutside"
import { usePrefersReducedMotion } from "hooks/usePrefersReducedMotion"
import ProductSummary from "components/Cart/ProductSummary"
import styles from "./cartModal.module.css"

function CartModal({ products, closeModal }) {
  const ref = useRef()
  useOnClickOutside(ref, closeModal)

  const prefersReducedMotion = usePrefersReducedMotion()

  const animationConfig = prefersReducedMotion
    ? {}
    : {
        from: { opacity: 0, transform: "translate3d(0, -200px, 0)" },
        to: { opacity: 1, transform: "translate3d(0, 60px, 0)" },
        config: { mass: 3, tension: 450, friction: 35 },
      }

  const animation = useSpring(animationConfig)

  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <animated.div ref={ref} style={animation} className={styles.modal}>
          <div>
            {products.length &&
              products.map((product) => (
                <ProductSummary key={product.id} product={product} />
              ))}
          </div>
          <button className={styles.btn}>submit</button>
        </animated.div>
      </div>
    </div>
  )
}

export default CartModal
