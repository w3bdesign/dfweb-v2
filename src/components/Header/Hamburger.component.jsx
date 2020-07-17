import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { HamburgerCollapse } from "react-animated-burgers"

/**
 * Mobile menu
 * Uses useState to keep track of if the menu is expanded.
 * If true, we add Animate.css animation classes
 */

export default function Hamburger() {
  const [isExpanded, setisExpanded] = useState(false)
  const [isInitialRender, setisInitialRender] = useState(true)
  const node = useRef()

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      /**
       * Clicked inside of the menu
       */
      return
    }
    /**
     * Clicked outside of the menu
     */
    setisExpanded(false)
  }

  const handleMobileMenuClick = () => {
    setisExpanded(!isExpanded)
    setisInitialRender(false)
  }

  useEffect(() => {
    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isExpanded])

  return (
    <div ref={node} className="z-50 md:hidden lg:hidden xl:hidden">
      <HamburgerCollapse
        isActive={isExpanded}
        toggleButton={handleMobileMenuClick}
        buttonColor="#2d3748"
        barColor="white"
        id="hamburger"
        data-cy="hamburger"
        onClick={handleMobileMenuClick}
      />

      {/* 
        Start the mobile menu initially as hidden, then remove hidden class if we have clicked on the mobile menu
        Add Animate.css animation classes once we click on the mobile menu
        */}
      <div
        id="mobile-menu"
        className={`absolute right-0 w-full text-center bg-gray-800 w-30 h-60  ${
          isInitialRender && `hidden`
        }   ${
          isExpanded
            ? `animate__animated animate__fadeInUp`
            : `animate__animated animate__fadeOutDown`
        }`}
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
