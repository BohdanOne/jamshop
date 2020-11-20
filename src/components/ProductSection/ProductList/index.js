import React, { useEffect, useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Carousel, { consts } from "react-elastic-carousel"

import { calculateItemsToShow } from "./helpers"
import ProductCard from "../ProductCard/"
import ProductListArrow from "../ProductListArrow/"
import styles from "./productList.module.css"

function renderArrow({ type, onClick }) {
  const direction = type === consts.PREV ? "left" : "right"
  return <ProductListArrow onClick={onClick} direction={direction} />
}

function ProductList() {
  const data = useStaticQuery(query)
  const products = data.allMarkdownRemark.nodes.map(
    (product) => product.frontmatter,
  )

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
    <div className={styles.container} ref={ref}>
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

const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { slug: { ne: null } } }) {
      nodes {
        frontmatter {
          name
          slug
          excerpt
          price
        }
      }
    }
  }
`

export default ProductList
