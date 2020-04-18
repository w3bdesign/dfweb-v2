// https://www.youtube.com/watch?v=97A3uRS7_YA
// https://github.com/syntacticsolutions/react-navigation-menu
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=%2Fsrc%2FExample.tsx

import React from "react"
import HamburgerSVG from "../../svg/hamburger.svg"

export default function Hamburger() {
  return (
    <div className="md:hidden lg:hidden xl:hidden">
      <HamburgerSVG className="w-10 m-4" style={{ height: "70px", color: "#fff" }} />
    </div>
  )
}
