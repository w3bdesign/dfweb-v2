/* eslint-disable react/jsx-filename-extension */
import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Hamburger from "../../src/components/layout/Header/Hamburger.component"

describe("Verify that the mobile menu is in the document", () => {
  /**
   * We need to mock the Gatsby useStaticQuery in the SEO component
   */
  beforeEach(() => {
    useStaticQuery.mockImplementationOnce(() => ({
      site: {
        siteMetadata: {
          title: "Default Starter",
        },
      },
    }))
  })

  test("Hamburger is in the document", () => {
    const { getByTestId } = render(<Hamburger />)
    const HamburgerButton = getByTestId("hamburger")
    expect(HamburgerButton).toBeInTheDocument()
  })

  test("Mobile menu is initially hidden", () => {
    const { getByTestId } = render(<Hamburger />)
    const MobileMenu = getByTestId("mobile-menu")
    expect(MobileMenu).not.toBeVisible()
  })
})
