import React from "react"

import Layout from "../layouts"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import CommunityChoicesSection from "../components/CommunityChoicesSection"

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <CommunityChoicesSection />
    </Layout>
  )
}
