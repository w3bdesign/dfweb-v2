import React from "react"
import AppLogo from "../../logo/dfweb-hvit.svg"

export default function NavbarContent() {
  return (
    <>
      <div className="container flex flex-wrap items-center mx-auto">
        <div className="flex justify-center w-full font-extrabold text-white md:w-1/2 md:justify-start">
          <a
            className="text-white no-underline hover:text-white hover:no-underline"
            href="#link"
          >
            <AppLogo style={{height:'100px'}}/>
          </a>
        </div>
        <div className="flex content-center justify-between w-full m-24 md:w-1/2 md:justify-end">
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
