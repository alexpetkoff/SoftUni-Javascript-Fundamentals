function memoryGame(arr) {

    let sequence = arr.shift(0).split(' ');
    let i = 0;
    let count = 0;
    while (arr[i] != 'end') {
        let [indexOne, indexTwo] = arr[i].split(' ').map(Number);
        count++;
        if (indexOne === indexTwo || sequence[indexOne] === undefined || sequence[indexTwo] === undefined) {
            console.log('Invalid input! Adding additional elements to the board');
            sequence.splice((sequence.length) / 2, 0, `-${count}a`, `-${count}a`);

        } else
            if (sequence[indexOne] === sequence[indexTwo]) {
                console.log(`Congrats! You have found matching elements - ${sequence[indexOne]}!`);
                if (indexTwo > indexOne) {
                    sequence.splice(indexTwo, 1);
                    sequence.splice(indexOne, 1);
                } else {
                    sequence.splice(indexOne, 1);
                    sequence.splice(indexTwo, 1);
                }
                if (sequence.length === 0) { break; }
            } else
                if (sequence[indexOne] !== sequence[indexTwo]) {
                    console.log('Try again!');

                }

        i++;
    }
    if (sequence.length > 0) {
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
    } else {
        console.log(`You have won in ${count} turns!`);
    }
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]) 
