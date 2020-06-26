import React from "react"
import loadable from '@loadable/component'

// Header
const Navbar = loadable(() => import("../components/Header/Navbar.component"))
const NavbarContent = loadable(() => import("../components/Header/NavbarContent.component"))

// SEO component with title and description
const SEO = loadable(() => import("../components/SEO/SEO.component"))

// Main
const MainContent = loadable(() => import("../components/Index/MainContent.component"))

// Footer
const Footer = loadable(() => import("../components/Footer/Footer.component"))

// Transition animations
const Transition = loadable(() => import("../utils/transition"))

/**
 * Main index page
 */

function Index() {
  return (
    <>
      <SEO title="Forside - Portefølje Daniel Fjeldstad" />
      <Navbar>
        <NavbarContent />
      </Navbar>
      <Transition>
        <MainContent />
      </Transition>
      <Footer />
    </>
  )
}

export default Index
