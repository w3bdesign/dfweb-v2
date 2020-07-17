import React from "react"
import { FontAwesomeCopyright } from "../FontAwesome/FontAwesome.component"

/**
 * Footer for site
 */

export default function Footer() {
  return (
    <>
      <footer role="footerinformasjon" aria-label="Innholdet for bunnteksten med copyright">
        <div className="mt-4 bg-gray-800 shadow-lg">
          <div role="copyrightinfo" aria-label="Her kommer selve copyright teksten" className="container p-6 mx-auto text-lg text-center text-white">
            Copyright Daniel Fjeldstad <FontAwesomeCopyright /> 2020
          </div>
        </div>
      </footer>
    </>
  )
}
