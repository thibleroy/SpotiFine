Cypress.Commands.add('login', (bearer: string) => {
    localStorage.setItem('access_token', bearer);
});
Cypress.Commands.add('dataCy', (target: string) => {
    cy.get(`[data-cy=${target}]`);
});
Cypress.Commands.add('cleanDB', (target: string) => {
    cy.request({
        url: `https://${Cypress.env('SF_BACKEND_ADDR_DEV')}:${Cypress.env('SF_BACKEND_PORT')}/user`,
        qs: {
            spotify_id: Cypress.env('SPOTIFY_USER_ID')
        },
        method: 'DELETE',
        failOnStatusCode: false
    });
});
