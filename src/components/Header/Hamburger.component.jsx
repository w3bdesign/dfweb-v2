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
        id="hamburger"
        data-cy="hamburger"
        onClick={() => {
          setisExpanded(!isExpanded)
        }}
        className="w-10 h-8 m-4 text-white hover:text-gray-500"
      />
      {isExpanded && (
        <motion.div
          id="mobile-menu"
          className="absolute right-0 text-center bg-gray-800 w-30 h-60"
          initial={{
            width: "0%",
          }}
          animate={{
            width: "100%",
          }}
        >
          <ul>
            <li className="w-full border-t border-gray-600 border-solid shadow-md ">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/"
              >
                Hjem
              </Link>
            </li>
            <li className="w-full border-t border-gray-600 border-solid shadow-md ">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/portefølje"
              >
                Portefølje
              </Link>
            </li>
            <li className="w-full border-t border-gray-600 border-solid shadow-md ">
              <Link
                className="inline-block m-4 text-xl text-white hover:underline"
                activeClassName="underline"
                to="/cv"
              >
                CV
              </Link>
            </li>
            <li className="w-full border-t border-gray-600 border-solid shadow-md ">
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
