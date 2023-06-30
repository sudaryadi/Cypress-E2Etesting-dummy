describe('Page verification', () => {
    it('passes', () => {
      cy.visit('https://www.google.com/')
      cy.get('#APjFqb').type('sanbercode')
      cy.get('.FPdoLc > center > .gNO89b').click()
      cy.get('.tF2Cxc > .yuRUbf > a > .LC20lb').click()
    })
  })