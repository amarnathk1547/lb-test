
describe('Validate starships api requirements', () => {
  it('Validate name and death_star', () => {
    cy.request({
      method: 'GET',
      url: 'https://swapi.dev/api/starships/9/',
    }).then(res=>{
      console.log(res)
      expect(res.body.name).to.eql('Death Star')
      expect(res.body.crew).to.equal('342,953')
    })   
  })
})