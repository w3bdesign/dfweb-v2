import { cy, describe, beforeEach, it } from "cypress"

describe(`The Home Page`, () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it(`Contains my name in the hero section`, () => {
    cy.get("[data-cy=daniel]").contains(`Daniel`)
  })
})
