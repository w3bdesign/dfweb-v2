import React from "react"
import Logo from "../../svg/logo-vectorized.svg"

/**
 * Main SVG logo component
 */

export default function AppLogo() {
  return (
    <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
      <a className="text-white" href="/" aria-label="Forside">
        <Logo
          aria-label="Dfweb logo"
          className="h-12 lg:p-2 xl:p-2 lg:h-16 xl:h-16 lg:ml-2 xl:ml-2"
        />
      </a>
    </div>
  )
}
