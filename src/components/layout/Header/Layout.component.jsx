import React from "react"
import PropTypes from "prop-types"

import { animated, Transition } from "react-spring"

// Header
import Navbar from "./Navbar.component"

// Footer
import Footer from "../Footer/Footer.component"

/**
 * Layout HOC to include Navbar and Footer
 *
 * @param {Object} children Display the React components passed down from the menu
 */
const Layout = function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Transition
        items={children}
        config={{
          duration: 1000,
        }}
        from={{ opacity: 0 }}
        enter={{ opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {({ opacity }, item) => (
          <animated.div
            style={{
              opacity: opacity.to({
                range: [0.0, 1.0],
                output: [0, 1],
              }),
            }}
          >
            {item}
          </animated.div>
        )}
      </Transition>
      <Footer />
    </>
  )
}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
