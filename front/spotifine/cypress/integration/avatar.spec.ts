import {targets} from '../targets';

const token = '123';
describe('avatar', () => {
    beforeEach(() => {
        cy.server();
        cy.route({
            url: 'https://api.spotify.com/v1/me',
            response: 'fixture:account.json',
            method: 'GET'
        }).as('me');
        cy.login(token);
        cy.visit('/home');
    });
    it('current path should be home', () => {
        cy.location('pathname', {log: true}).should('contain', '/home');

    })
    it('show avatar even if no img in account', () => {
        cy.wait('@me');
        cy.get(targets.status_img).then((img) => {
            cy.wrap(img.prop('src')).should('contain', 'account');
        });
    });
});
