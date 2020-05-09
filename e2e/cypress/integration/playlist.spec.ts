const token = '123';
import { identifiers } from '../../../front/spotifine/src/html_identifiers';
import { playlist } from '../routes/me.route';

describe('playlist page', () => {
    beforeEach(() => {
        cy.server();
        playlist().as('playlist');
        cy.login(token);
    });
    afterEach(() => {
        cy.logout();
    })

    it('empty artists list', () => {

    })


    it('filled artists list with 1 member', () => {

    })
});
