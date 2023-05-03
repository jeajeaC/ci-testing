describe("cart", () => {
    it("should addand remove an item from cart", () => {
        cy.visit("http://localhost:5173")
        cy.screenshot()
        cy.contains("The Cart App")
        cy.get("ul > li:nth-child(1) > div > article > .add-button").click()
        cy.screenshot()
        cy.contains("item added to cart")
        cy.get(".Toastify__close-button ").click()
        cy.screenshot()

        // cy.get("ul > li:nth-child(1) > div > .item-delete-button").click() // can't find how to swipe
    })

    it("should remove everything from cart", () => {
        cy.visit("http://localhost:5173")
        cy.contains("The Cart App")
        cy.get("ul > li:nth-child(1) > div > article > .add-button").click()
        cy.screenshot()
        cy.contains("item added to cart")
        cy.get(".Toastify__close-button ").click()
        cy.screenshot()
        cy.get("footer > button").click()
        cy.contains("removed everything from cart")
        cy.screenshot()
    })
})
