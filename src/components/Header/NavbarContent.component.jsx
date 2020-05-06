import React from "react"
import { Link } from "gatsby"
import { v4 as uuidv4 } from "uuid"

import AppLogo from "./Applogo.component"
import Hamburger from "./Hamburger.component"

import LINKS from "../../constants/LINKS"

export default function NavbarContent() {
  return (
    <>
    
      <div className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap">
        <AppLogo />
        <div className="flex content-center justify-between md:w-1/2 md:justify-end">
          <Hamburger />
          <ul className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex">
            {LINKS.map((link) => (
              <li key={uuidv4()} className="mr-3">
                <Link
                  className="inline-block m-4 text-xl text-white hover:underline"
                  activeClassName="underline"
                  to={link.url}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </>
  )
}
