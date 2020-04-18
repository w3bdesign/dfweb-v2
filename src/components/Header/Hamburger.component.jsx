import React from "react"
import HamburgerSVG from "../../svg/hamburger.svg"

export default function Hamburger() {
  return (
    <div className="md:hidden lg:hidden xl:hidden">
      <HamburgerSVG style={{ color: "#fff" }} />
    </div>
  )
}
