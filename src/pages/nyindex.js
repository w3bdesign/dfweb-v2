/*

Inspirational resources: 

https://www.dcode.no/

*/

import React from "react"

import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

import MainContent from "../components/NyIndex/MainContent.component"

function IndexPage() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <MainContent />
    </>
  )
}

export default IndexPage
