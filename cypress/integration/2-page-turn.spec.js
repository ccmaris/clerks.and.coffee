/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('./index.html?test=true');
});

describe('The initial page', () => {
  it('is the first one', () => {
    cy.get('[data-cy="page-1"]').should('exist');
  });
});

describe('The previous page turn button', () => {
  it('shows the previous page (#9)', () => {
    cy.get('[data-cy="page-1"]').should('exist');
    cy.get('[data-cy="button-previous"]').click().wait(2000);
    cy.get('[data-cy="page-1"]').should('not.exist');
    cy.get('[data-cy="page-9"]').should('exist');
  });
});

describe('The next page turn button', () => {
  it('shows the next page (#2)', () => {
    cy.get('[data-cy="page-1"]').should('exist');
    cy.get('[data-cy="button-next"]').click().wait(2000);
    cy.get('[data-cy="page-1"]').should('not.exist');
    cy.get('[data-cy="page-2"]').should('exist');
  });
});
