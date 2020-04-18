import {targets} from '../targets';
import {environment} from '../../src/environments/environment'
const bearer: string = 'bearer';
const email: string = 'email';
const password: string = 'password';
describe('user should login and logout', () => {
    context('user login', () => {

        beforeEach(() => {
            cy.server();
            cy.route({

                method: 'POST'
            }).as('login')
            cy.logout();
            cy.visit('/login');
        })

        it('should log in', () => {
            cy.get(targets.email_input).should('be.visible').type(email);
            cy.get(targets.password_input).should('be.visible').type(password)
            cy.get(targets.login_button).should('be.visible').click();
        })
    })

    context('user logout', () => {
        beforeEach(() => {
            cy.login(bearer);
            cy.visit('/logout');
        })

        it('should log out', () => {

        });
    });

});
