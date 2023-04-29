function storage(array) {

    let items = new Map();

    for(let el of array) {
        let [item, quantity] = el.split(" ");
        
        if(!items.has(item)) {
            items.set(item, Number(quantity));
        } else {
            let newQuantity = Number(items.get(item)) + Number(quantity);
            items.set(item, newQuantity);
        }
    }
    
    for(let el of items) {
        console.log(el[0], '->', el[1]);
    }
}

storage(
['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);