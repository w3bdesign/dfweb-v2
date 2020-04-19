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
        <div className="absolute right-0 bg-gray-800 w-30 h-60">
          <ul className="">
            <li className="m-6">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/design3"
              >
                Hjem
              </Link>
            </li>
            <li className="m-6">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/design3"
              >
                Portefølje
              </Link>
            </li>
            <li className="m-6">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/design3"
              >
                CV
              </Link>
            </li>
            <li className="m-6">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/design3"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
