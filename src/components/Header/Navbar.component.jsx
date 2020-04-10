import React from "react"

export default function Navbar(props) {
  return (
    <>
      <nav className="fixed top-0 z-10 w-full p-2 mt-0 bg-gray-800">
        {props.children}
      </nav>
    </>
  )
}
