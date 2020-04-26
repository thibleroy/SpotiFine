Cypress.Commands.add('login', (bearer: string) => {
    localStorage.setItem('access_token', bearer);
});
Cypress.Commands.add('logout', () => {
    localStorage.removeItem('access_token');
});
Cypress.Commands.add('dataCy', (target: string) => {
    cy.get(`[data-cy=${target}]`);
});
