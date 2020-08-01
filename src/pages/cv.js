import React from "react"

// Layout
import Layout from "../components/layout/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/layout/SEO/SEO.component"

// Main content
import CVContent from "../components/pages/CV/CVContent.component"

/**
 * Display CV using react-pdf
 * Shows download link on mobile
 */

export default function CV() {
  return (
    <>
      <SEO title="CV - Portefølje - " />
      <Layout>
        <CVContent />
      </Layout>
    </>
  )
}
