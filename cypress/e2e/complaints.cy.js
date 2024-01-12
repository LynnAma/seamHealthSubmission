describe('Feedback', () => {

  beforeEach(() => {
    cy.visit('https://patient-satisfaction.seamhealth.support');
    cy.get(`[class="sub-section-div"]`).contains('Welcome').should('be.visible');
    cy.get(`input[name="signin-email"]`).type("xerelax126@roborena.com");
    cy.get(`input[name="password"]`).type("password");
    cy.get(`[class="login-text"]`).contains('Login').click();
    cy.get(`img[class=logo]`).should('be.visible'); 
  })

  
   it('Test that user can navigate to the feedback page and export feedback', () => {
      cy.get(`[class='nav-link']`).contains('Feedback').click();
      cy.get(`[class*='link-child']`).contains('Complaints').click();
      cy.get('h3').contains('Complaints').should('be.visible');
      cy.wait(200)
      cy.get('.export-complaints').contains('Export').click();
      cy.wait(200)
      cy.get(':nth-child(1) > .custom-select').click();
      cy.get('.open-status').click();
      cy.get(':nth-child(2) > .custom-select').click();
      cy.get('.inprogress-status').click();
      cy.get('#export-modal > .modal-dialog > #modal-content > .modal-footer > .modal-btn').click();
   })
  
})