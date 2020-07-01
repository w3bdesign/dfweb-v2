import React from "react"

// Layout
import Layout from "../components/Header/Layout.component"

// SEO component with title and description
import SEO from "../components/SEO/SEO.component"

// Main content
import KontaktContent from "../components/Kontakt/KontaktContent.component"

/**
 * Contact form page
 */

function Kontakt() {
  return (
    <>
      <SEO title="Kontakt - Portefølje Daniel Fjeldstad" />
      <Layout>
        <KontaktContent />
      </Layout>
    </>
  )
}

export default Kontakt
