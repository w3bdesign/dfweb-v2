import React from "react"
import AppLogo from "./Applogo.component"
//import { AnimatedLogo } from "../Animation/AnimatedLogo.component"

export default function NavbarContent() {
  return (
    <>
      <div className="container flex flex-wrap items-center mx-auto">
        <AppLogo />
        <div className="flex content-center justify-between w-full md:w-1/2 md:justify-end">
          <ul className="flex items-center justify-between flex-1 list-reset md:flex-none">
            <li className="mr-3">
              <a
                className="inline-block m-4 text-xl text-white underline"
                href="#link"
              >
                Hjem
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block m-4 text-xl text-gray-400 no-underline hover:text-gray-200 hover:underline"
                href="#link"
              >
                Portefølje
              </a>
            </li>
            <li className="mr-3">
              <a
                className="inline-block m-4 text-xl text-gray-400 no-underline hover:text-gray-200 hover:underline "
                href="#link"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
