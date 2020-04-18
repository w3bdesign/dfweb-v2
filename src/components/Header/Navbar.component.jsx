import React from "react"

import SEO from "../SEO/Helmet.component"

export default function Navbar(props) {
  return (
    <>
      <SEO />
      <nav className="p-2 bg-gray-800">{props.children}</nav>
    </>
  )
}
