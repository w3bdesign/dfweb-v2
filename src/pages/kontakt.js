import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

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
