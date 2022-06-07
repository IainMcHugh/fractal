Cypress.Commands.add('getByTestId', (value, extra) => {
  cy.get(`[data-testid=${value}]${extra ? ` ${extra}` : ''}`);
});

Cypress.Commands.add('desktop', () => {
  cy.viewport('macbook-11');
});

Cypress.Commands.add('getByLabel', (label) => {
  cy.contains('label', label)
    .invoke('attr', 'for')
    .then((id) => {
      cy.get('#' + id);
    });
});
