import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import ProductList from "./ProductList"

import styles from "./communityChoicesSection.module.css"

function CommunityChoicesSection() {
  const data = useStaticQuery(
    graphql`
      query {
        markdownRemark(frontmatter: { title: { ne: "" } }) {
          frontmatter {
            title
            lead
          }
        }
      }
    `,
  )
  const { title, lead } = data.markdownRemark.frontmatter

  return (
    <section className={styles.section}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title} </h2>
        <p className={styles.sectionIntro}>
          {lead}
        </p>
      </header>
      <ProductList />
    </section>
  )
}

export default CommunityChoicesSection
