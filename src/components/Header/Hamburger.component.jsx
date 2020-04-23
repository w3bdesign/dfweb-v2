// https://www.youtube.com/watch?v=97A3uRS7_YA

// https://github.com/syntacticsolutions/react-navigation-menu

// https://codesandbox.io/s/framer-motion-side-menu-mx2rw?fontsize=14&module=%2Fsrc%2FExample.tsx

// Animation:

// https://dev.to/sebastianguenther/react-how-to-design-smooth-page-transitions-and-animations-1fii

// https://www.youtube.com/watch?v=nqNIy8HkEQ8&app=desktop

// https://konstantinlebedev.com/framer-motion-intro/

// https://andrejgajdos.com/orchestrating-animations-with-framer-motion-in-react-js/

import React, { useState } from "react"
import { Link } from "gatsby"

import { motion } from "framer-motion"

import HamburgerSVG from "../../svg/hamburger.svg"

export const MenuLabelVariants = {
  expanded: {
    opacity: 1,
    display: "flex",
  },
  collapsed: {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  },
}

export default function Hamburger() {
  const [isExpanded, setisExpanded] = useState(false)
  return (
    <div className="z-50 md:hidden lg:hidden xl:hidden">
      <HamburgerSVG
        onClick={() => {
          setisExpanded(!isExpanded)
        }}
        className="w-10 m-4 text-white"
        style={{ height: "70px" }}
      />
      {isExpanded && (
        <motion.div
          className="absolute right-0 text-center bg-gray-800 w-30 h-60"
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
        >
          <ul>
            <li className="m-6">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/"
              >
                Hjem
              </Link>
            </li>
            <li className="m-6">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/portefølje"
              >
                Portefølje
              </Link>
            </li>
            <li className="m-6">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/cv"
              >
                CV
              </Link>
            </li>
            <li className="m-6">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/kontakt"
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  )
}
