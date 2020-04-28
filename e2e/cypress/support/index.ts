import './commands';
if (Cypress.env('TDD')) {
    import('cypress-watch-and-reload/support');
}

if(Cypress.env('coverage')) {
    import('@cypress/code-coverage/support');
}
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            login(access_token: string): Chainable<any>;
            dataCy(target: string): Chainable<Element>;
            cleanDB(): Chainable<any>
        }
    }
}
