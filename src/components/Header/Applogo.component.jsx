import React from "react"
import Logo from "../../logo/logo.svg"

// style={{ height: "70px" }}

export default function AppLogo() {
  return (
    <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
      <a className="text-white" href="/">
        <Logo />
      </a>
    </div>
  )
}
