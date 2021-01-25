import { cy, describe, context, beforeEach, it } from "cypress"

describe("Navigation", () => {
  context("720p resolution", () => {
    beforeEach(() => {
      // Run these tests as if in a desktop browser with a 720p monitor
      cy.viewport(1280, 720)
      cy.visit("/")
    })

    it("Hamburger should not be visible", () => {
      cy.get("#main-navigation").should("be.visible")
      cy.get("#hamburger").should("not.be.visible")
    })
  })

  context("Iphone-5 resolution", () => {
    beforeEach(() => {
      // Run these tests as if in a mobile browser and ensure our resolution is correct
      cy.viewport("iphone-5")
      cy.visit("/")
    })

    it("Hamburger is visible", () => {
      cy.get("[data-cy=hamburger]").should("be.visible")
    })

    it("Mobile menu is visible after we click on the hamburger", () => {
      cy.findByRole("button", { name: /navigation/i }).click()
      cy.findByRole("link", { name: /Forside/i }).should("exist")

      // cy.get("[data-cy=hamburger]").click()
      // cy.contains("Kontakt").should("be.visible")
    })
  })
})
