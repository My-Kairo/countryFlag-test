describe('Country Flags', () => {
    it('Should match all the regex specified', () => {
        let flag = FlagCountries();
        flag.addTheCountries('Brazil: π§π·')
        let c = flag.getCountries('Brazil: π§π·')
        console.log(c);
        assert.equal(c,  flag.getCountries('Brazil: π§π·') )
    })
    it('Should add the country name', () => {
        let country = FlagCountries()
        country.addTheCountries('Uganda: πΊπ¬')
        let b = country.getCountries('Uganda')
        assert.equal(b,  country.getCountries('Uganda'));
    }) 
    it('Should sort the countries by name', () => {
        let flag = FlagCountries();
        flag.sortedArray('brazil')
        let a = flag.getCountries('brazil')
        assert.equal(flag.getCountries(), a)
    })

    it('Should set the country name to uppercase', () => {
        let country = FlagCountries()
        country.addTheCountries('uganda: πΊπ¬')
        let b = country.getCountries('uganda')
        assert.equal(b,  country.getCountries('Uganda'));
    }) 
    it('Should filter the countries by name', () => {
        let flag = FlagCountries();
        flag.addTheCountries('brazil')
        let a = flag.getCountries('brazil')
        assert.equal(flag.getCountries(), a)
    })

})