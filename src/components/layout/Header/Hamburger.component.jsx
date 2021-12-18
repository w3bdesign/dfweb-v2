import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi"

import LINKS from "../../../constants/LINKS"

/**
 * Mobile menu
 * Uses useState to keep track of if the menu is expanded.
 * If true, we add Animate.css animation classes
 */

function Hamburger() {
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
    /**
     * Anti-pattern: setisExpanded(!isExpanded)
     * Even if your state updates are batched and multiple updates to the enabled/disabled state are made together
     * each update will rely on the correct previous state so that you always end up with the result you expect.
     */
    setisExpanded((prevExpanded) => !prevExpanded)
    setisInitialRender(false)
  }

  useEffect(() => {
    /**
     * Add the event listeners so we can close the menu when we click outside the mobile menu
     * Eslint doesnt like it if I use a ternary here
     */

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    /**
     * Cleanup
     */
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isExpanded])

  return (
    <div ref={node} className="z-50 md:hidden lg:hidden xl:hidden">
      <GiHamburgerMenu
        className="fill-white w-10 h-10"
        id="hamburger"
        data-cy="hamburger"
        data-testid="hamburger"
        onClick={handleMobileMenuClick}
      />
      {/* 
        Start the mobile menu initially as hidden, then remove hidden class if we have clicked on the mobile menu
        Add Animate.css animation classes once we click on the mobile menu
        */}
      <div
        id="mobile-menu"
        data-testid="mobile-menu"
        aria-hidden={isInitialRender}
        hidden={isInitialRender}
        className={`absolute right-0 w-full text-center bg-gray-800 mt-4 w-30 ${
          isExpanded
            ? `animate__animated animate__fadeInUp`
            : `animate__animated animate__fadeOutDown`
        }`}
      >
        <ul role="navigation" aria-label="Navigasjon">
          {LINKS.map((link) => (
            <li
              key={link.id}
              className="w-full border-t border-gray-600 border-solid shadow"
            >
              {link.external ? (
                <a
                  className="inline-block m-4 text-xl text-white hover:underline"
                  aria-label={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  data-testid={`mobil-${link.text}`}
                >
                  {link.text}
                </a>
              ) : (
                <Link
                  className="inline-block m-4 text-xl text-white hover:underline"
                  activeClassName="underline"
                  data-testid={`mobil-${link.text}`}
                  to={link.url}
                >
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hamburger
