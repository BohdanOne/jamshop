import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

import styles from "./hero.module.css"

function HomepageHero() {
  const data = useStaticQuery(
    graphql`
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
    `,
  )

  const { hero } = data.markdownRemark.frontmatter

  return (
    <section className={styles.hero}>
      <img src={HeroImage} className={styles.heroImg} alt="Vector Monitor" />
      <div className={styles.heroContent}>
        <img src={HeroDecor} className={styles.decorImg} />
        <h1
          className={styles.heroSlogan}
          dangerouslySetInnerHTML={{ __html: hero.title }}
        />
        <Link to={hero.cta.href} className={styles.btn}>{hero.cta.text}</Link>
      </div>
      <img src={HeroBackground} className={styles.backgroundImg} />
    </section>
  )
}

export default HomepageHero
