import React from "react"

export default function Navbar(props) {
  return (
    <>
      <nav className="w-full p-2 mt-0 bg-gray-800">
        {props.children}
      </nav>
    </>
  )
}
