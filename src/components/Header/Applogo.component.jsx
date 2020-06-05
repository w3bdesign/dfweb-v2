import React from "react"
import Logo from "../../svg/logo-vectorized.svg"

export default function AppLogo() {
  return (
    <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
      <a className="text-white" href="/">
        <Logo className="h-12 lg:h-16 xl:h-16" />
      </a>
    </div>
  )
}
