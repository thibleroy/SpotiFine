const token = '123';
import { identifiers } from '../../../front/spotifine/src/html_identifiers';
import { me, me_playlists } from '../routes/me.route';

describe('side menu', () => {
    beforeEach(() => {
        cy.server();
        me().as('me');
        me_playlists()
        cy.login(token);
        cy.visit('/welcome');
        cy.wait("@me");
    });

    it('when logged, the menu_buttons have to be visible and clickable screen width > 992 px', () => {
        cy.viewport(1920, 1080)

        cy.dataCy(identifiers.home_route).click();
        cy.location('pathname').should('contain', '/home');

        cy.dataCy(identifiers.welcome_route).click();
        cy.location('pathname').should('contain', '/welcome');
    })

    it('when logged, the header_side_menu_button and the  menu_buttons have to be visible and clickable screen width < 992 px', () => {
        cy.viewport(720, 480)

        cy.dataCy(identifiers.header_side_menu_button).click();

        cy.dataCy(identifiers.welcome_route).click();

        cy.dataCy(identifiers.header_side_menu_button).click();

        cy.dataCy(identifiers.home_route).click();
    })
});
