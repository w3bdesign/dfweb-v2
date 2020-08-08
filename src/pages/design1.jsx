import React from "react"

// Layout
import Layout from "../components/layout/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/layout/SEO/SEO.component"

// Main
import Design1Content from "../components/pages/Design1/Design1Content.component"

/**
 * Experimental design
 */

export default function Design1() {
  return (
    <>
      <SEO title="Forside - Design1 - " />
      <Layout>
        <Design1Content />
      </Layout>
    </>
  )
}
