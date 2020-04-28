const token = '123';
import { identifiers } from '../../../front/spotifine/src/html_identifiers';
import { me } from '../routes/me.route';

describe('top artits', () => {
    beforeEach(() => {
        cy.server();
        me().as('me');
        cy.login(token);
        
    });
    afterEach(() => {
        cy.logout();
    })


    it('when logged, the menu_buttons have to be visible and clickable screen width > 992 px', () => {
        cy.viewport(1920, 1080)
        cy.visit('/welcome');
        cy.dataCy(identifiers.welcome_route).should("exist");

        cy.dataCy(identifiers.home_route).click();
        cy.location('pathname').should('contain', '/home');

        cy.dataCy(identifiers.welcome_route).click();
        cy.location('pathname').should('contain', '/welcome');
    })

    it('when logged, the header_side_menu_button and the  menu_buttons have to be visible and clickable screen width < 992 px', () => {
        cy.viewport(720, 480)
        cy.visit('/welcome');

        cy.dataCy(identifiers.header_side_menu_button).click();

        cy.dataCy(identifiers.welcome_route).should("exist");

        cy.dataCy(identifiers.home_route).should("exist");
    })
});
