import React from "react"
import Logo from "../../logo/logo.svg"



export default function AppLogo() {
  return (
    <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
      <a className="text-white" href="/">
        <Logo style={{ height: "70px" }} />
      </a>
    </div>
  )
}
