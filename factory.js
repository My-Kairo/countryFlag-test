function FlagCountries(country){
    let flagz = country || [];

    let countries = [
        {name: 'Argentina', flag: '🇦🇷'},
        {name: 'Brazil', flag: '🇧🇷'},
        {name: 'Chile', flag: '🇨🇱'},
        {name: 'Zambia', flag: '🇿🇲'},
        {name: 'Uganda', flag: '🇺🇬'},
        {name: 'Malawi', flag: '🇲🇼'},
        {name: 'Rwanda', flag: '🇷🇼'},
        {name: 'Ireland', flag: '🇮🇪'},
        {name: 'Switzerland', flag: '🇨🇭'},
      
      ]

    let regex = /[a-zA-z]$/g;
    let reg = /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/;


    function addTheCountries (names, flag){
        if (names.match(regex) && flag.match(reg)){
            if (!flagz.includes(names) && !flagz.includes(flag)) {
                flagz.push(names) && flag.push(flag)
                return true
            }else {
                return false
            }
        }
    }
    
    function getCountries (){
        return flagz;
    }
    

    let search = countries.filter(countrry => countrry.flag);

    // function getsearched (){
    //     return search;
    search()
    // }
    // search = () => flagz;
    // search()


    return {
        addTheCountries,
        getCountries,
        getsearched,
        search()
    }
}