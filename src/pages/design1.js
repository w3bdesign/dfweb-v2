import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main
import Design1Content from "../components/Design1/Design1Content.component"

// Footer
import Footer from "../components/Footer/Footer.component"

/**
 * Experimental design
 */

function Design1() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <Design1Content />
      <Footer />
    </>
  )
}

export default Design1
