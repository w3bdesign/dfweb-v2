import React from "react"

import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

import MainContent from "../components/Portefølje/MainContent.component"

function PorteføljePage() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <MainContent />
    </>
  )
}

export default PorteføljePage
