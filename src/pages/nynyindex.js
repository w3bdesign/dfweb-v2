/*

Inspirational resources: 

https://www.dcode.no/
https://www.coretrek.no/

*/

import React from "react"

import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

import MainContent from "../components/NyNyIndex/MainContent.component"

function NyIndexPage() {
  return (
    <>
      <Navbar>
        <NavbarContent />
      </Navbar>
      <MainContent />
    </>
  )
}

export default NyIndexPage
