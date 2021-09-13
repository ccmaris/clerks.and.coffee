/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('./index.html?test=true').viewport('iphone-5').wait(2000);
});

describe('The header', () => {
  it('is always visible', () => {
    cy.scrollTo('bottom').get('[data-cy="header"]').should('be.visible');
  });
});
