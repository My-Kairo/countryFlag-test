describe('Country Flags', function(){
    it('Should match all the regex specified', function(){
        let flag = FlagCountries();
        flag.addTheCountries('Brazil: 🇧🇷')
        assert.equal(flag.getCountries(), 'Brazil: 🇧🇷')
    })
    it('Should add the country name', function(){
        let country = FlagCountries()
        let them = {name: 'Argentina', flag: '🇦🇷'}
        country.addTheCountries(them)
        assert.equal('them',  country.getCountries());
    }) 
    it('Should set the country name to uppersace', function() {
        let flag = FlagCountries();
        flag.addTheCountries('brazil: 🇧🇷')
        assert.equal(flag.getCountries(), 'Brazil: 🇧🇷')
    })


})