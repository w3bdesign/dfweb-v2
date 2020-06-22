import React, { useState } from "react"
import { Link } from "gatsby"

import HamburgerSVG from "../../svg/hamburger.svg"

export default function Hamburger() {
  const [isExpanded, setisExpanded] = useState(false)
  const [isInitialRender, setisInitialRender] = useState(true)

  return (
    <div className="z-50 md:hidden lg:hidden xl:hidden">
      <HamburgerSVG
        id="hamburger"
        data-cy="hamburger"
        onClick={() => {
          setisExpanded(!isExpanded)
          setisInitialRender(false)
        }}
        className="w-10 h-8 m-4 text-white hover:text-gray-500"
      />

      {
        // Start the mobile menu initially as hidden, then remove hidden class if we have clicked on the mobile menu
        // Add Animate.css animation classes once we click on the mobile menu
      }
      
      <div
        id="mobile-menu"
        className={`absolute right-0 w-full text-center bg-gray-800 w-30 h-60  ${
          isInitialRender && `hidden`
        }   ${
          isExpanded
            ? `animate__animated animate__fadeInUp`
            : `animate__animated animate__fadeOutDown`
        }`}
        initial={{
          width: "0%",
        }}
        animate={{
          width: "100%",
        }}
      >
        <ul>
          <li className="w-full border-t border-gray-600 border-solid shadow-md ">
            <Link
              className="inline-block m-4 text-xl text-white hover:underline"
              activeClassName="underline"
              to="/"
            >
              Hjem
            </Link>
          </li>
          <li className="w-full border-t border-gray-600 border-solid shadow-md ">
            <Link
              className="inline-block m-4 text-xl text-white hover:underline"
              activeClassName="underline"
              to="/portefølje"
            >
              Portefølje
            </Link>
          </li>
          <li className="w-full border-t border-gray-600 border-solid shadow-md ">
            <Link
              className="inline-block m-4 text-xl text-white hover:underline"
              activeClassName="underline"
              to="/cv"
            >
              CV
            </Link>
          </li>
          <li className="w-full border-t border-gray-600 border-solid shadow-md ">
            <Link
              className="inline-block m-4 text-xl text-white hover:underline"
              activeClassName="underline"
              to="/kontakt"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
