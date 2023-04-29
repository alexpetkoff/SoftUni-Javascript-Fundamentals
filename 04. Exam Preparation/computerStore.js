function computerStore(prices) {

    let customerType = prices.pop();
    let totalPriceNoTax = 0;

    for (let el of prices) {

        if (+el < 0) {
            console.log('Invalid price!');
        } else {
            totalPriceNoTax += Number(el);
        }
    }

    let taxes = totalPriceNoTax * 0.20;
    let totalPriceWithTax = totalPriceNoTax + taxes;

    if (totalPriceNoTax === 0) {
        console.log('Invalid order!')
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPriceNoTax.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        if (customerType === 'special') {
            console.log(`Total price: ${(totalPriceWithTax - (totalPriceWithTax * 0.10)).toFixed(2)}$`)
        } else {
            console.log(`Total price: ${totalPriceWithTax.toFixed(2)}$`);
        }
    }
}

computerStore([
    'regular'
]);