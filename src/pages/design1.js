import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main
import MainContent from "../components/Design1/Design1Content.component"

// Footer
import Footer from "../components/Footer/Footer.component"

function IndexPage() {
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

export default IndexPage
