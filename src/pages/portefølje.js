import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main content
import MainContent from "../components/Portefølje/MainContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

function PorteføljePage() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <MainContent />
      <Footer />
    </>
  )
}

export default PorteføljePage
