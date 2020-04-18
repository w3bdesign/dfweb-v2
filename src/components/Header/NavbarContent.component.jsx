import React from "react"
import { Link } from "gatsby"

import AppLogo from "./Applogo.component"
import Hamburger from "./Hamburger.component"

export default function NavbarContent() {
  return (
    <>
      <div className="container flex items-center mx-auto md:flex-wrap lg:flex-wrap xl:flex-wrap">
        <AppLogo />
       
        <div className="flex content-center justify-between md:w-1/2 md:justify-end">
        <Hamburger />
          <ul className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex">
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/"
              >
                Design #1
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/design2"
              >
                Design #2
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/design3"
              >
                Design #3
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/portefølje"
              >
                Portefølje
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/cv"
              >
                CV
              </Link>
            </li>
            <li className="mr-3">
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
    </>
  )
}
