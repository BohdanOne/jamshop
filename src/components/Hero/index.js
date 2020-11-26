import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import HeroBackground from "assets/elements/hero_background.svg"
import HeroImage from "assets/elements/monitor.svg"
import styles from "./hero.module.css"

function HomepageHero() {
  const data = useStaticQuery(query)
  const { hero } = data.markdownRemark.frontmatter

  return (
    <>
      <section className={styles.container}>
        <div className={styles.imgContainer}>
          <img
            src={HeroImage}
            className={styles.heroImg}
            alt="Vector Monitor"
          />
        </div>
        <div className={styles.contentContainer}>
          <h1
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: hero.title }}
          />
          <Link to={hero.cta.href} className={styles.btn}>
            {hero.cta.text}
          </Link>
        </div>
      </section>
      <img src={HeroBackground} className={styles.backgroundImg} alt="" />
    </>
  )
}

const query = graphql`
  query {
    markdownRemark(frontmatter: { hero: { title: { ne: null } } }) {
      frontmatter {
        hero {
          title
          cta {
            href
            text
          }
        }
      }
    }
  }
`
export default HomepageHero
