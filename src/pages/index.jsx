import React from "react"

// Layout
import Layout from "../components/layout/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/layout/SEO/SEO.component"

// Main
import IndexContent from "../components/pages/Index/IndexContent.component"

/**
 * Main index page
 */

function Index() {
  return (
    <>
      <SEO title="Forside - Portefølje - " />
      <Layout>
        <IndexContent />
      </Layout>
    </>
  )
}

export default Index
