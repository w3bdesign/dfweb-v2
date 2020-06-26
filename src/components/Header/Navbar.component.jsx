import React from "react"

/**
 * Navbar HOC to include SEO component and navigation content
 *
 * @param {Object} children Display the React components passed down from the menu
 */
export default function Navbar({ children }) {
  return (
    <>
      <header>
        <nav className="fixed top-0 z-50 w-full p-2 bg-gray-800 shadow-lg">
          {children}
        </nav>
      </header>
    </>
  )
}
