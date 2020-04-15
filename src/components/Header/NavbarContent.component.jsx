import React from "react"
import { Link } from "gatsby"

import AppLogo from "./Applogo.component"

export default function NavbarContent(props) {
  return (
    <>
      <div className="container flex flex-wrap items-center mx-auto">
        <AppLogo />

        <div className="flex content-center justify-between w-full md:w-1/2 md:justify-end">
          <ul className="flex items-center justify-between flex-1 list-reset md:flex-none">
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white"
                activeClassName="underline"
                to="/"
              >
                Hjem
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white"
                activeClassName="underline"
                to="/portefølje"
              >
                Portefølje
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white"
                activeClassName="underline"
                to="/cv"
              >
                CV
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white"
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
