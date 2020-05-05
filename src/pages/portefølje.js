import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main content
import PorteføljeContent from "../components/Portefølje/PorteføljeContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

function PorteføljePage() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <PorteføljeContent />
      <Footer />
    </>
  )
}

export default PorteføljePage
