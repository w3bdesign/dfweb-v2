import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// SEO component with title and description
import SEO from "../components/SEO/SEO.component"

// Main content
import KontaktContent from "../components/Kontakt/KontaktContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

// Transition animations
import Transition from "../utils/transition"

/**
 * Contact form page
 */

function Kontakt() {
  return (
    <>
      <SEO title="Kontakt - Portefølje Daniel Fjeldstad" />
      <Navbar>
        <NavbarContent />
      </Navbar>
      <Transition>
        <KontaktContent />
      </Transition>
      <Footer />
    </>
  )
}

export default Kontakt
