function storeProvisions(currentStock, purchasedStock) {

    let totalStockObject = {};
    for (let i = 0; i < currentStock.length; i += 2) {
        let stock = currentStock[i];
        let quantity = Number(currentStock[i + 1]);

        totalStockObject[stock] = quantity;
    }

    for (let y = 0; y < purchasedStock.length; y += 2) {
        let stock = purchasedStock[y];
        let quantity = +purchasedStock[y + 1];

        if (totalStockObject.hasOwnProperty(stock)) {
            totalStockObject[stock] += quantity;
        } else {
            totalStockObject[stock] = quantity;
        }
    }

    for (let key in totalStockObject) {
        console.log(`${key} -> ${totalStockObject[key]}`);
    }

}

storeProvisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);