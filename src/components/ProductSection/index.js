import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProductList from "components/ProductSection/ProductList"
import styles from "./productSection.module.css"

function ProductSection() {
  const data = useStaticQuery(query)
  const { title, lead } = data.markdownRemark.frontmatter

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title} </h2>
        <p className={styles.lead}>{lead}</p>
      </header>
      <ProductList />
    </section>
  )
}

const query = graphql`
  query {
    markdownRemark(frontmatter: { title: { ne: "" } }) {
      frontmatter {
        title
        lead
      }
    }
  }
`

export default ProductSection
