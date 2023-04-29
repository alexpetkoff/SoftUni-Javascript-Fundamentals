function smallestTwoNumbers(array) {
    let result = array.sort((a,b) => a - b);
    console.log(result.slice(0,2).join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])