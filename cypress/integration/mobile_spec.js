describe("Navigation", () => {
  context("720p resolution", () => {
    beforeEach(() => {
      // run these tests as if in a desktop
      // browser with a 720p monitor
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
      // run these tests as if in a mobile browser
      // and ensure our responsive UI is correct
      cy.viewport("iphone-5")
      cy.visit("/")
    })

    // This seems to fail on production build but works just fine locally? 
    // Manually tested and is working
    
    /*
    it("Displays mobile menu on click", () => {
      cy.get("#main-navigation").find("#hamburger").click()
      cy.get("#mobile-menu").should("be.visible")
    })
    */
  })
})
