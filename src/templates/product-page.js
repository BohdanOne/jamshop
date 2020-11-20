import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/SEO/index"
import styles from "./productPage.module.css"
import Dumy from "../assets/products/dumy.svg"

function ProductPage({ data }) {
  const { name, price, description, tag } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={name} />
      <div className={styles.page}>
        <img className={styles.img} src={Dumy} alt={name} />
        <div className={styles.content}>
          <p className={styles.tag}>{tag}</p>
          <h1 className={styles.name}>{name}</h1>
          <div className={styles.description}>{description}</div>
          <p className={styles.price}>${price}</p>
          <button className={styles.btn}>add to cart</button>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        name
        price
        description
        tag
        image
      }
    }
  }
`

export default ProductPage
