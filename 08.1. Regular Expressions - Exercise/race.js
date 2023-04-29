function race(input) {

    let participants = input.shift().split(', ');
    let index = 0;
    let obj = new Object();
    for (let el of participants) {
        obj[el] = 0;
    }

    while (input[index] != 'end of race') {
        let personPattern = /(?<person>[A-Za-z])/g;
        let distancePattern = /(?<distance>\d)/g;
        let person = '';
        let distance = 0;
        for (let ch of input[index]) {
            if (ch.match(personPattern)) {
                person += ch;
            }
            if (ch.match(distancePattern)) {
                distance += Number(ch);
            }
        }
        if (obj.hasOwnProperty(person)) {
            obj[person] += distance;
        }
        index++;
    }
    let toSortResults = Object.entries(obj);
    toSortResults.sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${toSortResults[0][0]}`);
    console.log(`2nd place: ${toSortResults[1][0]}`);
    console.log(`3rd place: ${toSortResults[2][0]}`);
}

race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);