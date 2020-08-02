import React from "react"
import LogoSVG from "./LogoSVG"

/**
 * Main SVG logo component
 */

export default function AppLogo() {
  return (
    <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
      <a className="text-white" href="/" aria-label="Forside">
        <LogoSVG aria-label="Dfweb logo" />
      </a>
    </div>
  )
}
