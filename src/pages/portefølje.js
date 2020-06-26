import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main content
import PorteføljeContent from "../components/Portefølje/PorteføljeContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

// Transition animations
import Transition from "../utils/transition"

function Portefølje() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <Transition>
      <PorteføljeContent />
      </Transition>
      <Footer />
    </>
  )
}

export default Portefølje
