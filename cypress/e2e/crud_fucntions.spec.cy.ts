import CONSTANTS = require('../fixtures/constants.json')
describe('Validate CRUD functions on people api', () => {
  it('Validate GET request', () => {
    cy.request('https://swapi.dev/api/people/1/').then(res=>{
      console.log(res)
      expect(res.status).to.equal(200)
      expect(res.headers['content-type']).to.include(CONSTANTS.response_type);
      expect(res.headers.allow).to.equal(CONSTANTS.allowed_headers)
    })
  })

  it('Validate POST request', () => {
    cy.request({
      method: 'POST',
      url: 'https://swapi.dev/api/people/1/',
      failOnStatusCode: false
    }).then(res=>{
      console.log(res)
      expect(res.status).to.equal(405)
      expect(res.headers['content-type']).to.include(CONSTANTS.response_type);
      expect(res.headers.allow).to.equal(CONSTANTS.allowed_headers)
    })
  })

  it('Validate PUT request', () => {
    cy.request({
      method: 'PUT',
      url: 'https://swapi.dev/api/people/1/',
      failOnStatusCode: false
    }).then(res=>{
      console.log(res)
      expect(res.status).to.equal(405)
      expect(res.headers['content-type']).to.include(CONSTANTS.response_type);
      expect(res.headers.allow).to.equal(CONSTANTS.allowed_headers)
    })
  })

  it('Validate PATCH request', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://swapi.dev/api/people/1/',
      failOnStatusCode: false
    }).then(res=>{
      console.log(res)
      expect(res.status).to.equal(405)
      expect(res.headers['content-type']).to.include(CONSTANTS.response_type);
      expect(res.headers.allow).to.equal(CONSTANTS.allowed_headers)
    })
  })

  it('Validate DELETE request', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://swapi.dev/api/people/1/',
      failOnStatusCode: false
    }).then(res=>{
      console.log(res)
      expect(res.status).to.equal(405)
      expect(res.headers['content-type']).to.include(CONSTANTS.response_type);
      expect(res.headers.allow).to.equal(CONSTANTS.allowed_headers)
    })
  })
})