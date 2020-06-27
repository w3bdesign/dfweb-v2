import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// SEO component with title and description
import SEO from "../components/SEO/SEO.component"

// Main content
import CVContent from "../components/CV/CVContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

/**
 * Display CV using react-pdf
 * Shows download link on mobile
 */

function CV() {
  return (
    <>
      <SEO title="CV - Portefølje Daniel Fjeldstad" />
      <Navbar>
        <NavbarContent />
      </Navbar>

      <CVContent />

      <Footer />
    </>
  )
}

export default CV
