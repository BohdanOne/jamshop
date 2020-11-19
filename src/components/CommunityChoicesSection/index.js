import React from "react"

import ProductList from "./ProductList"

import styles from "./communityChoicesSection.module.css"

function CommunityChoicesSection() {
  return (
    <section className={styles.section}>
      <header>
        <h2 className={styles.sectionTitle}>Explore community choices</h2>
        <p className={styles.sectionIntro}>
          Updated daily based on most popular choices among dev community
        </p>
      </header>
      <ProductList />
    </section>
  )
}

export default CommunityChoicesSection
