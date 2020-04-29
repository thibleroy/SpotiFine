import {User} from "../../../../back/src/models/user.model";

const req_obj = {
    url: `https://${Cypress.env('SF_BACKEND_ADDR_DEV')}:${Cypress.env('SF_BACKEND_PORT')}/user`,
    qs: {
        spotify_id: Cypress.env('SPOTIFY_USER_ID')
    }
}
describe('user', () => {
    before(() => {
        cy.cleanDB();
    })
    context('should', () => {
        it('post', () => {
            cy.request({
                ...req_obj,
                method: 'POST',
            }).should((res) => {
                expect(res.status).to.eq(200);
                expect(res.body.value.spotify_id).to.eq(Cypress.env('SPOTIFY_USER_ID'))
            })
        });

        it('get', () => {
            cy.request({
                ...req_obj,
                method: 'GET'
            }).should((res) => {
                expect(res.status).to.eq(200);
                expect(res.body.value.spotify_id).to.eq(Cypress.env('SPOTIFY_USER_ID'))
            })
        })

        it('delete', () => {
            cy.request({
                ...req_obj,
                method: 'DELETE'
            }).should((res) => {
                expect(res.status).to.eq(200);
                expect(res.body.value.spotify_id).to.eq(Cypress.env('SPOTIFY_USER_ID'))
            })
        })
    })
})