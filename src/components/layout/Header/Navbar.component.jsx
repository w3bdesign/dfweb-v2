import React from "react"
import { Link } from "gatsby"

import AppLogo from "./Applogo.component"
import Hamburger from "./Hamburger.component"

import LINKS from "../../../constants/LINKS"

/**
 * Display the menu and the links
 * On mobile, we display a hamburger icon and include the Hamburger component
 * We reduce code duplication by loading the links from a JSON object and map over it
 */

export default function NavbarContent() {
  return (
    <>
      <header role="banner" aria-label="Header for logo og navigasjon">
        <nav className="fixed top-0 z-50 w-full p-2 bg-gray-800 shadow">
          <div
            id="main-navigation"
            data-cy="main-navigation"
            className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap"
          >
            <AppLogo />
            <div
              id="hamburger-div"
              data-cy="hamburger-div"
              className="flex content-center justify-between md:w-1/2 md:justify-end"
            >
              <Hamburger />
              <ul
                role="navigation"
                aria-label="Navigasjon"
                className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex lg:-mr-4 xl:-mr-4"
              >
                {LINKS.map((link) => (
                  <li key={link.id} className="mr-3">
                    {link.external ? (
                      <a
                        className="inline-block m-4 text-xl text-white hover:underline"
                        aria-label={link.text}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.text}
                      </a>
                    ) : (
                      <Link
                        className="inline-block m-4 text-xl text-white hover:underline"
                        activeClassName="underline"
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
        </nav>
      </header>
    </>
  )
}
