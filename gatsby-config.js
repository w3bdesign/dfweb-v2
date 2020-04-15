/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    { 
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false, 
         develop: false, 
         tailwind: true,  
         ignore: ["fontawesome-svg-core/"],
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-react-svg"
  ],
}
