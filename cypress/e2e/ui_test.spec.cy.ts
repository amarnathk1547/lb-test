import postcodes = require('./../fixtures/postcodes.json');
describe('Validate postcode and find phone number', () => {
  it('should find nearest branch and print phone number', () => {
    // Visit website
    cy.visit('https://www.lloydsbank.com/')
    // Loop through all postcodes from json file
    postcodes.postCodes.forEach((postCode) => {
      // Navigate to branch finder
      cy.findByRole('link', {name: /Branch Finder/i}).click()
      // Enter one of the postcodes
      cy.findByRole('textbox', {name: 'City, State/Province, Zip or City & Country'})
        .click()
        .clear()
        .type(postCode)
      // Search for postcode
      cy.findByRole('button', {name: /Submit a search./i}).click()
      // Wait for the results
      cy.findByText(/branches near/i)
        .should('be.visible')
        .invoke('text')
        .then(innerText => {
          const digitCount = innerText.match(/\d+/g).length;
          // Find if atleast one of the branch is returned on UI
          if (digitCount > 1) {
            // View first branch
            cy.findByRole('link', {name: /View branch/i})
              .first()
              .click()
            // Get phone number
            cy.get('#phone-main')
              .invoke('text')
              .then(phoneNumber => {
                // Log phone number
                cy.log(`Phone number of the first nearest branch is: ${phoneNumber}`)
              })
          } else {
            cy.log('No branches were found near your postcode')
          }
        })      
    });
  })
})