/*

Inspirational resources: 

https://www.dcode.no/
https://www.coretrek.no/

*/

import React from "react"

// Header
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// Main
import MainContent from "../components/Index/MainContent.component"

// Footer
import Footer from "../components/Footer/Footer.component"

function Index() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <MainContent />
      <Footer/>
    </>
  )
}

export default Index
