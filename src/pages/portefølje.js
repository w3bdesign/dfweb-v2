import React from "react"

// Layout
import Layout from "../components/layout/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/layout/SEO/SEO.component"

// Main content
import PorteføljeContent from "../components/pages/Portefølje/PorteføljeContent.component"

/**
 * Portfolio page
 * Includes Scroll-Reveal for scrolling reveal animations
 */

function Portefølje() {
  return (
    <>
      <SEO title="Portefølje - " />
      <Layout>
        <PorteføljeContent />
      </Layout>
    </>
  )
}

export default Portefølje
