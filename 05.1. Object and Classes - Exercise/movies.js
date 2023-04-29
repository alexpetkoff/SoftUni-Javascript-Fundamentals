function movies(command) {

    let arrayOfMovies = [];

    for (let el of command) {
        if (el.includes('addMovie')) {
            let name = el.replace('addMovie ', '');
            arrayOfMovies.push({ name: name });
        } else if (el.includes('directedBy')) {
            let [name, director] = el.split(' directedBy ');
            for (let x of arrayOfMovies) {
                if (x.name === name) {
                    x.director = director;
                }
            }
        } else if (el.includes('onDate')) {
            let [name, date] = el.split(' onDate ');
            for (let x of arrayOfMovies) {
                if (x.name === name) {
                    x.date = date;
                }
            }
        }
    }

    for (let el of arrayOfMovies) {
        if (el.date && el.director) {
            console.log(JSON.stringify(el))
        }
    }
}

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);