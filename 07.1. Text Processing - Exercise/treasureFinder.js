function treasureFinder(array) {

    let numbers = array.shift().split(' ').map(x => +x);
    let i = 0;
    let arrayDecrypted = [];

    while (array[i] !== 'find') {
        let currentString = '';
        let numIndex = 0;
        for (let ch of array[i]) {
            let currentCharCode = ch.charCodeAt();
            let newCharcode = currentCharCode - numbers[numIndex];
            let newCh = String.fromCharCode(newCharcode);
            currentString += newCh;
            numIndex++;
            if (numIndex === numbers.length) {
                numIndex = 0;
            }
        }
        arrayDecrypted.push(currentString);
        i++;
    }

    for(let string of arrayDecrypted) {
        let indexOneType = string.indexOf('&');
        string = string.replace('&', ' ');
        let indexTwoType = string.indexOf('&');
        let type = string.substring(indexOneType + 1, indexTwoType);
        let indexOneLocation = string.indexOf('<');
        let indexTwoLocation = string.indexOf('>');
        let location = string.substring(indexOneLocation + 1, indexTwoLocation);
        console.log(`Found ${type} at ${location}`)
    }

}

treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);