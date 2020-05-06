/* globals cy */

describe(`The Home Page`, () => {
  it(`successfully loads`, () => {
    cy.visit(`/`).waitForRouteChange()
  })
  it(`contains the title with an SVG icon and text "Gatsbygram"`, () => {  
    cy.getTestElement(`daniel`).contains(`Daniel`)
  })
})
