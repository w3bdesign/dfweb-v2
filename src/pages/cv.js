import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main content
import CVContent from "../components/CV/CVContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

// Transition animations
import Transition from "../utils/transition"

function CV() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <Transition>
      <CVContent />
      </Transition>
      <Footer />
    </>
  )
}

export default CV
