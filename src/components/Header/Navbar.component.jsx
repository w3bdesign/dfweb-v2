import React from "react"

import SEO from "../SEO/Helmet.component"

export default function Navbar(props) {
  return (
    <>
      <SEO />
      <nav className="w-full p-2 mt-0 bg-gray-800">{props.children}</nav>
    </>
  )
}
