import React from "react"

import ApplicationLogo from "../../../svg/logo-vector.svg"

/**
 * Main SVG logo component
 */

export default function AppLogo() {
  return (
    <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
      <a className="text-white" href="/" aria-label="Forside">
        <ApplicationLogo />
      </a>
    </div>
  )
}
