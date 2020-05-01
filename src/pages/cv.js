import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main content
import MainContent from "../components/CV/MainContent"

// Footer
import Footer from "../components/Footer/Footer.component"

function CVPage() {
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

export default CVPage
