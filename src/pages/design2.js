/*

Inspirational resources: 

https://www.npmjs.com/package/react-scrollmagic

https://www.tailwindtoolbox.com/

https://dev.to/sm0ke/tailwind-css-open-source-components-364h

https://github.com/creativetimofficial/tailwind-starter-kit

https://github.com/framer/motion

*/

import React from "react"

import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

import MainContent from "../components/Index/MainContent.component"

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
