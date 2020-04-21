// https://www.gatsbyjs.org/docs/unit-testing/

import React from "react"
import renderer from "react-test-renderer"

import AppLogo from "../Header/Applogo.component"

describe("AppLogo", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<AppLogo />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})