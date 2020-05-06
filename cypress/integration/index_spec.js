/* globals cy */

describe(`The Home Page`, () => {
  it(`successfully loads`, () => {
    cy.visit(`/`)//.waitForRouteChange()
  })
  it(`Contains my name in the hero section`, () => {  
    cy.get('[data-cy=daniel]').contains(`Daniel`)
  })
})
