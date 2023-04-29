function fancyBarcode(array) {

    let pattern = /\@\#{1,}[A-Z][A-Za-z0-9]{4,}[A-Z]\@\#{1,}/g;
    let digitsPattern = /[0-9]+/g;
    let count = array.shift();
    count = +count;

    for(let el of array) {
        if(!el.match(pattern)) {
            console.log('Invalid barcode');
        } else {
            if(!el.match(digitsPattern)) {
                console.log('Product group: 00');
            } else {
                let concat = el.match(digitsPattern).join('');
                console.log(`Product group: ${concat}`);
            }
        }
    }
}

fancyBarcode(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@##Che4s6E@##",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]);