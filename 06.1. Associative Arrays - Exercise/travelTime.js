function travelTime(input) {

    let countriesObj = {};

    for (let line of input) {
        let [country, city, cost] = line.split(' > ');
        cost = +cost;
        if(!countriesObj.hasOwnProperty(country)) {
            countriesObj[country] = {};
            countriesObj[country][city] = cost;
        }
        if(!countriesObj[country].hasOwnProperty(city)) {
            countriesObj[country][city] = cost;
        } else {
            let oldCost = countriesObj[country][city];
            if(oldCost > cost) {
                countriesObj[country][city] = cost;
            } 
        }
    }

    let sortedCountries = Object.keys(countriesObj).sort((a,b) => a.localeCompare(b));;
    
    for(let key of sortedCountries) {
        let result = key + ' -> ';
        let costs = Object.entries(countriesObj[key]).sort((a,b) => a[1] - b[1]);
        for(let el of costs) {
            result += el[0] + ' -> ' + el[1] + ' ';
        }
        console.log(result);
    }

}   

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]);