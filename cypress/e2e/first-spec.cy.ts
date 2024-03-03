describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    //opening account menu
    cy.get('.dropdown-hoverable').find('.info').find('span').filter(':contains("My account")').trigger('mouseover');

    //opening registration form
    cy.get('.mz-sub-menu-96').find('.info').find('span').filter(':contains("Register")').click();

    //filling registration form
    cy.get('.form-control').filter('[placeholder="First Name"]').type('user123').should('have.value', 'user123');

    cy.get('#input-lastname').type('last1234');

    cy.get('[placeholder="E-Mail"]').type('user1123@mail.com');

    cy.get('[type="tel"]').type('917894561230');

    cy.get('#input-password').type('qwerty@12345');

    cy.get('#input-confirm').type('qwerty@12345');

    cy.get('.custom-control-label').filter(":contains('No')").prev().check({ force: true }).should('be.checked');

    cy.get('.custom-control-label')
      .filter(':contains("I have read")')
      .parent()
      .children('#input-agree')
      .check({ force: true })
      .should('be.checked');

    //submit details
    cy.get('[value="Continue"]').click();

    //verifying submission
    cy.contains('Your Account Has Been Created!').should('have.class', 'page-title');

    //moving to main page
    cy.contains('Continue').click();

    //verifying logged in to login page
    cy.contains('My Account').should('have.class', 'card-header');
  });
});
