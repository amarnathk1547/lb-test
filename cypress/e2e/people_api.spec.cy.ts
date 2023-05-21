describe('Validate PEOPLE api requirements', () => {
  const filmTitles = ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi', 'The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith']
  let arrayOfFilms = []
  it('Validate name and skin_color', () => {
    cy.request({
      method: 'GET',
      url: 'https://swapi.dev/api/people/3/',
    }).then(res=>{
      console.log(res)
      expect(res.status).to.equal(200)
      expect(res.body.name).to.equal('R2-D2')
      expect(res.body.skin_color).to.equal('white, blue')
      arrayOfFilms = res.body.films
      console.log(arrayOfFilms)
    })   
  })
  it('Validate film titles', ()=>{
    const titles = [];
    arrayOfFilms.forEach(url => {
      cy.request(url).then(response => {
          titles.push(response.body.title);
      });
    });
    cy.wrap(titles).should('have.length', arrayOfFilms.length).then(() => {
      expect(titles).to.deep.equal(filmTitles)
      console.log(titles);
    });
  })
})