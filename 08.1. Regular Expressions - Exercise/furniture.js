function furniture(array) {

    let pattern = />{1,}(?<furniture>[A-Z]{1,}[a-z]+|[A-Z]+)<{1,}(?<price>\d+\.\d+|\d+)!(?<quantity>\d+)/g;
    let furnitures = [];
    let prices = [];
    let validPurchases = pattern.exec(array);

    while (validPurchases !== null) {
        let {furniture, price, quantity} = validPurchases.groups;
        furnitures.push(furniture);
        let totalPrice = Number(price) * Number(quantity);
        prices.push(totalPrice);
        validPurchases = pattern.exec(array);
    }

    let totalPriceCombined = 0;

    for (let el of prices) {
        totalPriceCombined += el;
    }
    console.log('Bought furniture:');
    furnitures.forEach(el => console.log(el));
    console.log(`Total money spend: ${totalPriceCombined.toFixed(2)}`);
}

furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']);
