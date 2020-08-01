import React from "react"

// Layout
import Layout from "../components/layout/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/layout/SEO/SEO.component"

// Main
import MainContent from "../components/pages/Index/MainContent.component"

/**
 * Main index page
 */

function Index() {
  return (
    <>
      <SEO title="Forside - Portefølje - " />
      <Layout>
        <MainContent />
      </Layout>
    </>
  )
}

export default Index
