import React from "react"
import CopyrightSVG from "../SVGIcons/SVG/FontAwesomeCopyright"

/**
 * Footer for site
 */

const Footer = function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Innholdet for bunnteksten med copyright"
    >
      <div className="mt-4 bg-gray-800 shadow">
        <div
          aria-label="Copyright tekst"
          className="container p-6 mx-auto text-base text-center text-white"
        >
          Copyright Daniel Fjeldstad <CopyrightSVG /> {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  )
}

export default Footer
