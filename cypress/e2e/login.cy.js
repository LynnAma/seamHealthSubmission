describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://patient-satisfaction.seamhealth.support');
  })

  it('Test that the user is unable to login with the valid email and wrong password combination', () => {
   cy.get(`[class="sub-section-div"]`).contains('Welcome').should('be.visible');
   cy.get(`input[name="signin-email"]`).type("xerelax126@roborena.com");
   cy.get(`input[name="password"]`).type("team");
   cy.get(`[class="login-text"]`).contains('Login').click();
   cy.get(`[class*='work-space']`).contains('Enter your details to continue').should('be.visible');   
  })

  it('Test that the user is unable to login with only the valid unregistered email and password combination', () => {
    cy.get(`[class="sub-section-div"]`).contains('Welcome').should('be.visible');
    cy.get(`input[name="signin-email"]`).type("amatest@qa.team");
    cy.get(`input[name="password"]`).type("password");
    cy.get(`[class="login-text"]`).contains('Login').click();
    cy.get(`[class*='work-space']`).contains('Enter your details to continue').should('be.visible');   
   })


   it('Test that the user is unable to login with only the valid email with no password', () => {
    cy.get(`[class="sub-section-div"]`).contains('Welcome').should('be.visible');
    cy.get(`input[name="signin-email"]`).type("amatest@qa.team");
    cy.get(`[class="login-text"]`).contains('Login').click();
    cy.get(`[class*='work-space']`).contains('Enter your details to continue').should('be.visible');   
   })

   it('Test that the user is unable to login with no password and email', () => {
    cy.get(`[class="sub-section-div"]`).contains('Welcome').should('be.visible');
    cy.get(`[class="login-text"]`).contains('Login').click();
    cy.get(`[class*='work-space']`).contains('Enter your details to continue').should('be.visible');   
   })

   it('Test that the user is unable to login with only password and no email', () => {
    cy.get(`[class="sub-section-div"]`).contains('Welcome').should('be.visible');
    cy.get(`input[name="password"]`).type("password");
    cy.get(`[class="login-text"]`).contains('Login').click();
    cy.get(`[class*='work-space']`).contains('Enter your details to continue').should('be.visible');  
   })

   it('Test that the user is able to login with only the valid registered email and password combination', () => {
    cy.get(`[class="sub-section-div"]`).contains('Welcome').should('be.visible');
    cy.get(`input[name="signin-email"]`).type("xerelax126@roborena.com");
    cy.get(`input[name="password"]`).type("password");
    cy.get(`[class="login-text"]`).contains('Login').click();
    cy.get(`img[class=logo]`).should('be.visible'); 
   })
  
})