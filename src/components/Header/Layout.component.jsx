import React from "react"

// Header
import Navbar from "./Navbar.component"

// Footer
import Footer from "../Footer/Footer.component"

/**
 * Layout HOC to include Navbar and Footer
 *
 * @param {Object} children Display the React components passed down from the menu
 */
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
