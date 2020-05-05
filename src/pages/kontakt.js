import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main content
import KontaktContent from "../components/Kontakt/KontaktContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

function Kontakt() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <KontaktContent />
      <Footer />
    </>
  )
}

export default Kontakt
