import React from "react"

import Layout from "layouts"
import SEO from "components/SEO"
import styles from "./404.module.css"

export default function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={styles.container}>
        <h1 className={styles.title}>NOT FOUND</h1>
        <p className={styles.txt}>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Layout>
  )
}
