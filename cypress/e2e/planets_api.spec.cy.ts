const expectedResponse = require('./../fixtures/wookie.json')
describe('Validate Planets api requirements', () => {
  it('Validate wookiee foramat', () => {
    cy.request({
      method: 'GET',
      url: 'https://swapi.dev/api/planets/14?format=wookiee',
    }).then(response=>{
      expect(Object.keys(response.body)).to.have.members(Object.keys(expectedResponse));
      expect(response.body).to.eql(expectedResponse)
    })   
  })
})