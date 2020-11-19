import React from "react"

import styles from "./productList.module.css"
// import useWindowSize from "../../hooks/useWindowSize"
import products from "./dummyData"
import ProductCard from "../ProductCard/"
import ProductListArrow from "../ProductListArrow/index"

function ProductList() {
  // const { height, width } = useWindowSize()

  return (
    <div className={styles.listContainer}>
      <ProductListArrow direction="left" />
      <ul className={styles.list}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
      </ul>
      <ProductListArrow direction="right" />
    </div>
  )
}

export default ProductList
