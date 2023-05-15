describe("cart", () => {
    it("should addand remove an item from cart", async () => {
        cy.visit("http://localhost:5173")
        cy.argosScreenshot("home without cart")
        cy.contains("The Cart App")
        cy.get("ul > li:nth-child(1) > div > article > .add-button").click()
        cy.argosScreenshot("home with cart")
        cy.contains("item added to cart")
        cy.get(".Toastify__close-button ").click()

        // cy.get("ul > li:nth-child(1) > div > .item-delete-button").click() // can't find how to swipe
    })

    it("should remove everything from cart", async () => {
        cy.visit("http://localhost:5173")
        cy.contains("The Cart App")
        cy.get("ul > li:nth-child(1) > div > article > .add-button").click()
        cy.contains("item added to cart")
        cy.get(".Toastify__close-button ").click()
        cy.get("footer > button").click()
        cy.contains("removed everything from cart")
        cy.argosScreenshot("back to nothing in cart")
    })
})
