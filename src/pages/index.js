/*

Inspirational resources: 

https://www.npmjs.com/package/react-scrollmagic

https://www.tailwindtoolbox.com/

https://dev.to/sm0ke/tailwind-css-open-source-components-364h

https://github.com/creativetimofficial/tailwind-starter-kit

https://github.com/framer/motion

//

https://dev.to/sebastianguenther/react-how-to-design-smooth-page-transitions-and-animations-1fii

https://www.youtube.com/watch?v=nqNIy8HkEQ8&app=desktop

*/

import React from "react"
import Navbar from "../components/Header/Navbar.component"
import NavbarContent from "../components/Header/NavbarContent.component"

// flex items-center justify-center h-screen

function IndexPage() {
  return (
    <>
      <div className="">
        <Navbar>
          <NavbarContent />
        </Navbar>
        <div className="container mx-auto rounded">
          <div className="container p-4 mx-auto mt-4 ">
            <div className="p-12 font-sans text-lg text-center text-white rounded bg-hero">HERO</div>
          </div>

          <div className="grid grid-cols-2 gap-4 p-4 mt-4 ">
            <div className="p-12 text-lg text-center text-white rounded bg-hero">HERO</div>
            <div className="p-12 text-lg text-center text-white rounded bg-hero">HERO</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
