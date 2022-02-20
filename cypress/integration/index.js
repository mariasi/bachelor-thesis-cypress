describe('Cypress Test', () => {
    before('it logs into the app', () => {
        //with the before hook the execution uses a callback functions before every test is run. In this function methods for the log in scenario are described 
        cy.visit('https://etsy.com')
        cy.get('#wt-modal-container > #gdpr-single-choice-overlay > .wt-overlay__modal > .wt-overlay__footer > :nth-child(2)').click()
        cy.get('nav > .wt-display-flex-xs > :nth-child(1)').click()
        cy.get('#join_neu_email_field').type('danix93@24hinbox.com')
        cy.get('#join_neu_password_field').type('qwe123')
        cy.get(':nth-child(10) > .wt-validation').click()
        })
        //here the test cases are named and grouped with the "it". Two arguments and a string are taken and a callback function which contains the actual test
        it('types soap and hits enter', () => {
        cy.wait(5000)
        cy.get('#global-enhancements-search-query').type('soap')
        cy.get('.wt-input-btn-group__btn > .wt-icon > svg').type('Cypress.io{enter}')
        })

        it('adds item onto favourite', () => {
        cy.get('.wt-grid > :nth-child(1) > .js-merch-stash-check-listing > .v2-listing-card__actions > .btn--focus > .favorite-listing-button-icon-container > .wt-display-block > svg').click()
        })

        it('opens favourite tab', () => {
        cy.get('[data-favorites-nav-container=""] > .wt-tooltip > .wt-tooltip__trigger > .etsy-icon > svg').click()
        })
    })
