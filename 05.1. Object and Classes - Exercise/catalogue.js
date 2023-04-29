function catalogue(array) {

    let catalog = {};

    for (let el of array) {
        let [name, price] = el.split(' : ');
        price = +price;
        let tempObj = {
            [name]: price
        }
        Object.assign(catalog, tempObj);
    }

    let keysToSort = Object.keys(catalog);
    let sortedKeys = keysToSort.sort((a, b) => a.localeCompare(b));

    let firstLetter = '';
    for (let el of sortedKeys) {
        if (firstLetter === el[0]) {
            console.log(`  ${el}: ${catalog[el]}`);
        } else {
            firstLetter = el[0];
            console.log(firstLetter);
            console.log(`  ${el}: ${catalog[el]}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);