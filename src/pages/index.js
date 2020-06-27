import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// SEO component with title and description
import SEO from "../components/SEO/SEO.component"

// Main
import MainContent from "../components/Index/MainContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

// Transition animations
//import Transition from "../utils/transition"

/**
 * Main index page
 */

function Index() {
  return (
    <>
      <SEO title="Forside - Portefølje Daniel Fjeldstad" />
      <Navbar>
        <NavbarContent />
      </Navbar>
      
        <MainContent />
      
      <Footer />
    </>
  )
}

export default Index
