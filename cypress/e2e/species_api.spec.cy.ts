describe('Validate Species api requirements', () => {
  it('Validate name, classification and homeworld', () => {
    cy.request({
      method: 'GET',
      url: 'https://swapi.dev/api/species/3',
    }).then(res=>{
      console.log(res)
      expect(res.body.name).to.eql('Wookie')
      expect(res.body.classification).to.eql('mammal')
      cy.request(res.body.homeworld).then(response =>{
        expect(response.body.name).to.eql('Kashyyyk')
      })
    })   
  })
})