describe('Menu swab lags', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory')
    })
    it('Can acces the About menu', ()=>{
        cy.get('#react-burger-menu-btn').click()
        cy.get('#about_sidebar_link').click()
        cy.contains('Build apps users love with AI-driven insights').should('be.visible')
    })
    it('user can reset app state', ()=>{
        cy.get('#react-burger-menu-btn').click()
        cy.get('##reset_sidebar_link').click()
    })
})