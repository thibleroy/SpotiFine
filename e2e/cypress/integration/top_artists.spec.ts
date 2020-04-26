const token = '123';
import { identifiers } from '../../../front/spotifine/src/html_identifiers';
import { me, me_artists } from '../routes/me.route';

describe('top artits', () => {
    beforeEach(() => {
        cy.server();
        me().as('me');
        cy.login(token);
        
    });
    afterEach(() => {
        cy.logout();
    })

    it('empty artists list', () => {
        me_artists('top_artists/empty_top_artists.json').as('me/artists');
        cy.visit('/top_artists');
        cy.location('pathname').should('contain', '/top_artists');
        cy.contains('No artists available')
    })


    it('filled artists list with 1 member', () => {
        me_artists('top_artists/filled_top_artists.json').as('me/artists');
        cy.visit('/top_artists');
        cy.location('pathname').should('contain', '/top_artists');
        cy.dataCy(identifiers.artists_list).its(length).should('eq',1);
        cy.dataCy(identifiers.artists_list).get('li').first().should('contain', 'KISS')
    })
});
