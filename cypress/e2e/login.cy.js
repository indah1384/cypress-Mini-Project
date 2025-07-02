describe('Login Swag Labs', ()=> {
  beforeEach( ()=> {
    cy.visit('https://www.saucedemo.com/')
  })
   it('login with a valid account', ()=>{
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', '/inventory')
   })

   it('login with an invalid username', ()=>{
    cy.get('#user-name').type('user123')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('be.visible')
   })

   it('login with an invalid password', ()=>{
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('tes123')
    cy.get('#login-button').click()
    cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('be.visible')
   })

   it('login with an invalid username & password', ()=>{
    cy.get('#user-name').type('user123')
    cy.get('#password').type('tes123')
    cy.get('#login-button').click()
    cy.wait(2000)
    cy.get('#login_button_container > div > form > div.error-message-container.error > h3').should('be.visible')
   })
  })