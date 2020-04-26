import './commands';
import 'cypress-watch-and-reload/support';
declare global {
    namespace Cypress {
        interface Chainable {
            /**
             * Custom command to select DOM element by data-cy attribute.
             * @example cy.dataCy('greeting')
             */
            login(access_token: string): Chainable<any>;
            logout(): Chainable<any>
            dataCy(target: string): Chainable<Element>;
        }
    }
}
