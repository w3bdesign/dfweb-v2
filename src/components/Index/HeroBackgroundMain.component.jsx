import React from "react"
import { graphql, StaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

/**
 * Background for the main hero element on the front page
 * 
 * @param {Object} children JSX elements passed in to be rendered within the background component
 */
const HeroBackgroundMain = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "blue-hero.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={(data) => {
      // Set imageData
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"          
          className="flex flex-col justify-center text-lg text-white" 
          style={{             
            height: "450px",
          }}
          fluid={imageData}         
        >
         {children}
        </BackgroundImage>
      )
    }}
  />
)

export default HeroBackgroundMain
