import React from "react"
import CopyrightSVG from "../SVGIcons/SVG/Copyright.SVG"

/**
 * Footer for site
 */

export default function Footer() {
  return (
    <>
      <footer
        role="contentinfo"
        aria-label="Innholdet for bunnteksten med copyright"
      >
        <div className="mt-4 bg-gray-800 shadow">
          <div
            aria-label="Her kommer selve copyright teksten"
            className="container p-6 mx-auto text-base text-center text-white"
          >
            Copyright Daniel Fjeldstad 
            {' '}
            <CopyrightSVG />
            {' '}
            2020
          </div>
        </div>
      </footer>
    </>
  )
}
