describe('template spec', () => {
  it('passes', () => {
    cy.visit('/');

    cy.get('.dropdown-hoverable').find('.info').find('span').filter(':contains("My account")').trigger('mouseover');

    cy.get('.mz-sub-menu-96').find('.info').find('span').filter(':contains("Register")').click();
  });
});
