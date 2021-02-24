import React from "react"
import PropTypes from "prop-types"
import { Transition } from "react-spring/renderprops"

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
      <Transition
       // We could make more complex page transitions here
       // But we do not want to overwhelm the user with distracting animations
        config={{
          duration: 1000,
        }}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {() => (style) => <div style={style}>{children}</div>}
      </Transition>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
