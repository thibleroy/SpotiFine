describe('cypress is working with typescript', () => {
    it('should be eq', () => {
        const value: number = 2;
        cy.wrap(value).should("eq", 2)
    })
    it('should not be eq', () => {
        const value: number = 2;
        cy.wrap(value).should("not.eq", 3)
    })
})

describe('verifies web ui', () => {
    beforeEach(() => {
        cy.visit('/home')
    })
    it('verifies web title', () => {
        before(() => cy.visit('/home'))
        cy.title().should('eq', 'Spotifine')
    })
})
