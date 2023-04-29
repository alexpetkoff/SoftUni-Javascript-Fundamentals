function inventory(input) {

    let storedHeroes = [];

    for (let el of input) {
        let tempArray = [];
        let [name, level, items] = el.split(' / ');
        tempArray.push(name, level, items);
        storedHeroes.push(tempArray);
    }

    let sortedHeroes = storedHeroes.sort((a, b) => (a[1] - b[1]));

    for (let el of sortedHeroes) {
        console.log(`Hero: ${el[0]}`);
        console.log(`level => ${el[1]}`);
        console.log(`items => ${el[2]}`);
    }

}

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);