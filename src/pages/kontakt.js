import React from "react"

// Layout
import Layout from "../components/layout/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/layout/SEO/SEO.component"

// Main content
import KontaktContent from "../components/pages/Kontakt/KontaktContent.component"

/**
 * Contact form page
 */

function Kontakt() {
  return (
    <>
      <SEO title="Kontakt - Portefølje - " />
      <Layout>
        <KontaktContent />
      </Layout>
    </>
  )
}

export default Kontakt
