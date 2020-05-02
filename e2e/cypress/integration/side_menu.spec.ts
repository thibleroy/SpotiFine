const token = '123';
import {identifiers} from '../../../front/spotifine/src/html_identifiers';
import {me, me_playlists} from '../routes/me.route';

describe('> 992px', () => {
    beforeEach(() => {
        cy.server();
        me();
        me_playlists();
        cy.login(token);
        cy.viewport(1920, 1080);
        cy.visit('/welcome');
    });
    it('changes routes', () => {
        cy.dataCy(identifiers.playlists_route).click();
        cy.location('pathname').should('contain', '/playlists');
        cy.dataCy(identifiers.welcome_route).click();
        cy.location('pathname').should('contain', '/welcome');
    });
});

describe('< 992px', () => {
    const click = $el => {
        return $el.click();
    };
    beforeEach(() => {
        cy.server();
        me();
        me_playlists();
        cy.login(token);
        cy.viewport(720, 480);
        cy.visit('/welcome');
    });
    it('opens menu', () => {
        cy.dataCy(identifiers.header_side_menu_button).click();
        cy.dataCy(identifiers.side_menu).should('be.visible');
    });
    it('closes menu', () => {
        cy.dataCy(identifiers.header_side_menu_button).click();
        cy.dataCy(identifiers.welcome_route).should('be.visible').pipe(click).should((el) => {
            expect(el).to.not.be.visible;
        });
        cy.dataCy(identifiers.side_menu).should('not.be.visible');
    });
});
