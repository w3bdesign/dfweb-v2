const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: "Portefølje",
    siteUrl: "https://www.dfweb.no",
    titleTemplate: "%s Daniel Fjeldstad",
    description:
      "Portefølje for Daniel Fjeldstad, en utvikler som kan PHP, Javascript, Wordpress, React med mer.",
    url: "https://www.dfweb.no", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain the remote schema Query type
        typeName: "Project",
        // This is the field under which it's accessible
        fieldName: "Project",
        // URL to query from
        url: "https://graphql-express-dfweb.now.sh",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "DFWeb",
        short_name: "DFWeb",
        start_url: "/",
        background_color: "#2d3748",
        theme_color: "#2d3748",
        display: "standalone",
        icon: "src/svg/favicon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-prefetch-google-fonts",
      options: {
        fonts: [
          {
            family: "Lato",
            variants: ["400", "700", "900"],
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
        ignore: ["fontawesome-svg-core/"],
      },
    },
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-svg",     
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-netlify",
  ],
}
