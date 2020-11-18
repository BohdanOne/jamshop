import React from "react"

import HeroBackground from "../../assets/elements/hero_background.svg"
import HeroImage from "../../assets/elements/monitor.svg"
import HeroDecor from "../../assets/elements/hero_decor.svg"

import styles from "./hero.module.css"

function HomepageHero() {
  return (
    <section className={styles.hero}>
      <img src={HeroImage} className={styles.heroImg} alt="Vector Monitor" />
      <div className={styles.heroSection}>
        <img src={HeroDecor} className={styles.decorImg} />
        <h1 className={styles.heroSlogan}>
          Don't waste time
          <br />
          on boring things
        </h1>
        <button className={styles.btn}>GO EXPLORE</button>
      </div>
      <img src={HeroBackground} className={styles.backgroundImg} />
    </section>
  )
}

export default HomepageHero
