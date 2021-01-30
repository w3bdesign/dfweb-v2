import React from "react"

// Layout
import Layout from "../components/layout/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/layout/SEO/SEO.component"

// Main content
import ProsjektContent from "../components/pages/Prosjekter/ProsjektContent.component"

/**
 * Portfolio page
 * Includes react-reveal-effects for scrolling reveal animations
 */

export default function Prosjekter() {
  return (
    <>
      <SEO title="Portefølje - " />
      <Layout>
        <ProsjektContent />
      </Layout>
    </>
  )
}
