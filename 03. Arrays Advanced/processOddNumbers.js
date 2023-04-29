
/*
function processOddNumbers(array) {
    let result = [];

    for (let el in array) {
        if (el % 2 !== 0) {
            result.unshift(array[el] * 2);
        }
    }
    console.log(result.join(" "));
}

processOddNumbers([3, 0, 10, 4, 7, 3]); 
*/

function processOddNumbers(array) {
    let newArray =
        array.filter((x, i) => i % 2 === 1)
            .map(x => x * 2)
            .reverse()
            .join(' ');
    console.log(newArray);
}
processOddNumbers([3, 0, 10, 4, 7, 3]);