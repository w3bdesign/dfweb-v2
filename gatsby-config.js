require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Portefølje",
    siteUrl: "https://www.dfweb.no",
    titleTemplate: "%s Daniel Fjeldstad",
    description:
      "Portefølje for Daniel Fjeldstad, en utvikler som kan PHP, Javascript, Wordpress, React med mer.",
    url: "https://www.dfweb.no", // No trailing slash allowed!
    image: "/images/screenshot.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  plugins: [
    "gatsby-plugin-postcss",
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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-react-svg",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",    
  ],
}
