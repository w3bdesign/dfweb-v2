/* eslint-disable react/jsx-filename-extension */
import React from "react"
import { render } from "@testing-library/react"
import { useStaticQuery } from "gatsby"

import Index from "../../src/pages/index"

import Logo from "../../src/svg/Logo.inline.svg"

describe("General checks", () => {
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
})

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
    const { getByTestId } = render(<Index />)
    // const { getByTestId } = render(<div><Index /><Logo /></div>)
    const Hamburger = getByTestId("hamburger")
    expect(Hamburger).toBeInTheDocument()
  })

  test("Mobile menu is initially hidden", () => {
    // const { getByTestId } = render(<div><Index /><Logo /></div>)
    const { getByTestId } = render(<Index />)
    const Main = getByTestId("mobile-menu")
    expect(Main).not.toBeVisible()
  })
})
