describe('Product Swag Labs', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory')
    })
    it('Add product to cart', ()=>{
        cy.contains('Sauce Labs Backpack').should('be.visible')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#shopping_cart_container > a').click()
        cy.get('#item_4_title_link > div').should('be.visible')
    })
    it('See the detail product', ()=>{
        cy.get('#item_4_title_link > div').click()
        cy.get('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_desc.large_size').should('be.visible')
        cy.get('#inventory_item_container > div > div > div.inventory_details_img_container > img').should('be.visible')
    })
        it('Filter product Name (A To Z)', ()=>{
        cy.get('#header_container > div.header_secondary_container > div > span > select').select('Name (A to Z)')
        cy.contains('Name (A to Z)').should('be.visible')
        cy.contains('Sauce Labs Backpack').should('be.visible')
    })
    it('Filter product Name (Z To A)', ()=>{
        cy.get('#header_container > div.header_secondary_container > div > span > select').select('Name (Z to A)')
        cy.contains('Name (Z to A)').should('be.visible')
        cy.contains('Test.allTheThings() T-Shirt (Red)').should('be.visible')
    })
    it('Filter product with name (Low to hight)', ()=>{
        cy.get('#header_container > div.header_secondary_container > div > span > select').select('Price (low to high)')
        cy.contains('Price (low to high)').should('be.visible')
        cy.contains('Sauce Labs Onesie').should('be.visible')
    })
    it('Filter product with name (Hight to Low)', ()=>{
        cy.get('#header_container > div.header_secondary_container > div > span > select').select('Price (high to low)')
        cy.contains('Price (high to low)').should('be.visible')
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible')
    })
})