// https://www.youtube.com/watch?v=97A3uRS7_YA
// https://github.com/syntacticsolutions/react-navigation-menu
// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=%2Fsrc%2FExample.tsx

import React, { useState } from "react"
import { Link } from "gatsby"

import HamburgerSVG from "../../svg/hamburger.svg"

export default function Hamburger() {
  const [isExpanded, setisExpanded] = useState(false)
  return (
    <div className="md:hidden lg:hidden xl:hidden">
      <HamburgerSVG
        onClick={() => {
          setisExpanded(!isExpanded)
        }}
        className="w-10 m-4 text-white hover:text-black"
        style={{ height: "70px" }}
      />
      {isExpanded && (
        <div className="mt-20 bg-white w-30 h-30">
          <ul className="items-center justify-between flex-1 hidden list-reset md:flex lg:flex xl:flex">
            <li className="mr-3">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/design3"
              >
                Hjem
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
