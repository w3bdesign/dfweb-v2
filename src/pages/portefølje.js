import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// SEO component with title and description
import SEO from "../components/SEO/SEO.component"

// Main content
import PorteføljeContent from "../components/Portefølje/PorteføljeContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

/**
 * Portfolio page
 * Includes Scroll-Reveal for scrolling reveal animations
 */

function Portefølje() {
  return (
    <>
      <SEO title="Portefølje - Portefølje Daniel Fjeldstad" />
      <Navbar>
        <NavbarContent />
      </Navbar>

      <PorteføljeContent />

      <Footer />
    </>
  )
}

export default Portefølje
