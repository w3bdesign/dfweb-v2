import React from "react"
import { FontAwesomeCopyright } from "../FontAwesome/FontAwesome.component"

/**
 * Footer for site
 */

export default function Footer() {
  return (
    <>
      <footer>
        <div className="mt-4 bg-gray-800 shadow-lg">
          <div className="container p-6 mx-auto text-xl text-center text-white">
            Copyright Daniel Fjeldstad <FontAwesomeCopyright /> 2020
          </div>
        </div>
      </footer>
    </>
  )
}
