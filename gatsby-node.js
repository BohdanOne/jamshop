const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: { slug: { regex: "/^[a-z0-9]+(?:-[a-z0-9]+)*$/" } }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/productPage.js`),
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}
