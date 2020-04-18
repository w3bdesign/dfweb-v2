import React from "react"
import HamburgerSVG from "../../svg/hamburger.svg"

export default function Hamburger() {
  return (
    <div className="md:hidden lg:hidden xl:hidden">
      <HamburgerSVG className="w-10 m-4" style={{ height: "70px", color: "#fff" }} />
    </div>
  )
}
