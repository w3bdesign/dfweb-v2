import React from "react"

// Layout
import Layout from "../components/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/SEO/SEO.component"

// Main content
import CVContent from "../components/CV/CVContent.component"

/**
 * Display CV using react-pdf
 * Shows download link on mobile
 */

function CV() {
  return (
    <>
      <SEO title="CV - Portefølje Daniel Fjeldstad" />
      <Layout>
        <CVContent />
      </Layout>
    </>
  )
}

export default CV
