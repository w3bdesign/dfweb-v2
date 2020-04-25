/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Portefølje",
    titleTemplate: "%s · Daniel Fjeldstad",
    description:
      "Portefølje for Daniel Fjeldstad, en utvikler som kan PHP, Javascript, Wordpress, React med mer.",
    url: "https://www.dfweb.no", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    "gatsby-plugin-postcss",   
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
    "gatsby-plugin-react-svg",
    "gatsby-plugin-react-helmet",    
    "gatsby-plugin-netlify"
  ],
}
