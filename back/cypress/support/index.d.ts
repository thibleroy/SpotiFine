declare namespace Cypress {
    interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        logout(): Chainable<any>;
        login(bearer: string): Chainable<any>;
    }
}
