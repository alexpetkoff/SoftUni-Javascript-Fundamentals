function softUniBar(input) {

    let pattern = /[^|%$.]*\%(?<name>[A-Z][a-z]+)\%[^|%$.]*\<(?<product>\w+)\>[^|%$.]*\|(?<quantity>\d+)\|[^|%$.0-9]*(?<price>\d+.\d+|\d+)\$[^|%$.]*/g;
    let index = 0;
    let total = 0;

    while(input[index] !== 'end of shift') {
        let line = pattern.exec(input[index]);
        if(input[index].match(pattern)) {
            console.log(`${line.groups['name']}: ${line.groups['product']} - ${(Number(line.groups['quantity']) * Number(line.groups['price'])).toFixed(2)}`);
            let currentTotal = (Number(line.groups['quantity']) * Number(line.groups['price'])).toFixed(2);
            total += Number(currentTotal);
        }
        index++;
    }

    console.log(`Total income: ${total.toFixed(2)}`)
}

softUniBar(
['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);