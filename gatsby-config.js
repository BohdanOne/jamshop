module.exports = {
  siteMetadata: {
    title: "BEJAMAS | GATSBY SHOP",
    description: "",
    author: "@bejamasio",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Jam Shop",
        short_name: "Jam Shop",
        start_url: "/",
        background_color: "#1c042e",
        theme_color: "#1c042e",
        display: "minimal-ui",
        icon: "./src/assets/images/icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["montserrat:400,700", "roboto:400"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "products",
        path: `${__dirname}/src/data/products`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
