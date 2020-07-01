import React from "react"

// Layout
import Layout from "../components/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/SEO/SEO.component"

// Main content
import PorteføljeContent from "../components/Portefølje/PorteføljeContent.component"

/**
 * Portfolio page
 * Includes Scroll-Reveal for scrolling reveal animations
 */

function Portefølje() {
  return (
    <>
      <SEO title="Portefølje - Portefølje Daniel Fjeldstad" />
      <Layout>
        <PorteføljeContent />
      </Layout>
    </>
  )
}

export default Portefølje
