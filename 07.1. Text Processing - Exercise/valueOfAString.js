function valueOfString(input) {

    let string = input[0];
    let task = input[1];
    let sum = 0;
    if(task === 'LOWERCASE') {

        for(let ch of string) {
            if(ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) {
                sum += ch.charCodeAt(0);
            }
        }

    } else {

        for(let ch of string) {
            if(ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
                sum += ch.charCodeAt(0);
            }
        }

    }
    console.log(`The total sum is: ${sum}`);
}

valueOfString(
    ['HelloFromMyAwesomePROGRAM',
        'LOWERCASE']);