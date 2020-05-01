const token = '123';
import {identifiers} from '../../../front/spotifine/src/html_identifiers';
import {me, me_playlists} from '../routes/me.route';
describe('avatar', () => {
    beforeEach(() => {
        cy.server();
        me().as('me');
        me_playlists().as('me/playlists');
        cy.login(token);
        cy.visit('/playlists');
    });
    it('current path should be playlists', () => {
        cy.location('pathname').should('contain', '/playlists');
    });
    it('show avatar even if no img in header', () => {
        cy.wait('@me');
        cy.dataCy(identifiers.status_img).should('have.prop', 'src').should('contain', 'account')
    });
    it('show avatar even if no img in account modal', () => {
        cy.dataCy(identifiers.me_btn).click();
        cy.dataCy(identifiers.avatar_modal).should('have.prop', 'src').should('contain', 'account');
    });
});
