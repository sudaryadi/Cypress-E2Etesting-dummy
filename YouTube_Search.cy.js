describe('Search on YouTube', () => {
  it('passes', () => {
    cy.visit('https://www.youtube.com/')
    cy.get('#search-input > #search').type('Sanbercode')
    cy.get('#search-icon-legacy').click()
    cy.get(':nth-child(1) > #content-section > #avatar-section > .channel-link > #avatar > .ytd-channel-renderer > #img').should('be.visible')
    cy.get(':nth-child(1) > #content-section > #info-section > #buttons > #subscribe-button > .style-scope > yt-button-shape > .yt-spec-button-shape-next > yt-touch-feedback-shape > .yt-spec-touch-feedback-shape > .yt-spec-touch-feedback-shape__fill').click()
  })
})