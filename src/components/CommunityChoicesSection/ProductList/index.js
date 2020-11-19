import React, { useEffect, useState, useRef } from "react"
import Carousel, { consts } from "react-elastic-carousel"
import styles from "./productList.module.css"
import products from "./dummyData"
import ProductCard from "../ProductCard/"
import ProductListArrow from "../ProductListArrow/index"

const PRODUCT_CARD_WIDTH = 305 // card 265px + padding 2*20px
const ARROWS_WIDTH = 130

function renderArrow({ type, onClick }) {
  const direction = type === consts.PREV ? "left" : "right"
  return <ProductListArrow onClick={onClick} direction={direction} />
}

function calculateItemsToShow(parentWidth) {
  const number = Math.floor((parentWidth - ARROWS_WIDTH) / PRODUCT_CARD_WIDTH)
  if (number < 1) {
    return 1
  }
  if (number > 4) {
    return 4
  }
  return number
}

function ProductList() {
  const ref = useRef(null)
  const [itemsToShow, setItemsToShow] = useState(null)

  useEffect(() => {
    if (ref.current) {
      setItemsToShow(calculateItemsToShow(ref.current.offsetWidth))
    }
  }, [ref.current])

  useEffect(() => {
    function calculateItemsOnResize() {
      setItemsToShow(calculateItemsToShow(ref.current.offsetWidth))
    }
    window.addEventListener("resize", calculateItemsOnResize)
    return () => {
      window.removeEventListener("resize", calculateItemsOnResize)
    }
  })

  return (
    <div className={styles.listContainer} ref={ref}>
      {ref.current && (
        <Carousel
          itemsToShow={itemsToShow}
          pagination={false}
          enableTilt
          disableArrowsOnEnd={false}
          itemPadding={[0, 20, 0, 20]}
          renderArrow={renderArrow}
        >
          {products &&
            products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
        </Carousel>
      )}
    </div>
  )
}

export default ProductList
