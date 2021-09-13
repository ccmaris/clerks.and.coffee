/// <reference types="cypress"/>

const hexToRgb = hex => hex
  .replace('#', '')
  .match(/.{2}/g)
  .map(intensity => parseInt(intensity, 16))
  .reduce((rgbString, value, index) => rgbString + ((index === 2) ? `${value})` : `${value}, `), 'rgb(');

beforeEach(() => {
  cy.visit('./index.html?test=true');
});

describe('The two color inputs', () => {
  it('hold the same value', () => {
    cy.get('[data-cy="input-text"]').invoke('val').then(initialTextValue => {
      cy.get('[data-cy="input-color"]').should('have.value', initialTextValue);
    });
  });

  it('hold as value the card\'s background color', () => {
    cy.get('[data-cy="input-text"]').invoke('val').then(initialTextValue => {
      cy.get('[data-cy="card-0"]').should('have.css', 'background-color', hexToRgb(initialTextValue));
    });
  });
});

describe('The text color input', () => {
  context('on correct input', () => {
    beforeEach(() => {
      cy.get('[data-cy="input-text"]').clear().type('#ffffff{enter}');
    });

    it('changes the color inputs value', () => {
      cy.get('[data-cy="input-color"]').should('have.value', '#ffffff');
    });

    it('changes the card\'s background color', () => {
      cy.get('[data-cy="card-0"]').should('have.css', 'background-color', hexToRgb('#ffffff'));
    });

    it('persists on full page reloads', () => {
      cy.reload(true);

      cy.get('[data-cy="input-color"]').should('have.value', '#ffffff');

      cy.get('[data-cy="card-0"]').should('have.css', 'background-color', hexToRgb('#ffffff'));
    });
  });

  context('on invalid input', () => {
    beforeEach(() => {
      cy.get('[data-cy="input-text"]').clear().type('#wronghexcolorinput{enter}');
    });

    it('persists the initial/previous color', () => {
      cy.get('[data-cy="input-text"]').should('have.value', '#007e7e');
    });

    it('sets the fieldset\'s border color to red', () => {
      cy.get('[data-cy="fieldset"]').should('have.css', 'border-color', hexToRgb('#ff0000'));
    });
  });
});

describe('The color contrasting', () => {
  it('sets the text color to white on black backgrounds', () => {
    cy.get('[data-cy="input-text"]')
      .clear()
      .type('#000000{enter}');

    cy.get('[data-cy="card-0"]')
      .should('have.css', 'color', hexToRgb('#ffffff'));
  });

  it('sets the text color to black on white backgrounds', () => {
    cy.get('[data-cy="input-text"]')
      .clear()
      .type('#ffffff{enter}');

    cy.get('[data-cy="card-0"]')
      .should('have.css', 'color', hexToRgb('#000000'));
  });
});
