function listOfProducts(products) {
    let sortedProducts = products.sort();

    for (let el in sortedProducts) {
        console.log(`${Number(el) + 1}.${sortedProducts[el]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);