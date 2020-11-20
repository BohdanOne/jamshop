import React from "react"
import { graphql } from "gatsby"

import Layout from "../layouts/index"
import SEO from "../components/SEO/index"

import Dumy from "../assets/products/dumy.svg"

function ProductPage({ data }) {
  const { name, price, description, tag } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO title={name} />
      <div>
        <img src={Dumy} alt={name} />
        <div style={{ color: "#fff" }}>
          <p>{tag}</p>
          <h1>{name}</h1>
          <div>{description}</div>
          <p>${price}</p>
          <button>add to cart</button>
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
      }
    }
  }
`

export default ProductPage
