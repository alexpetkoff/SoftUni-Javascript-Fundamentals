function maxNumber(array) {

    let maxArray = [];
    let currentNumber = 0;

    for (let i = 0; i <= array.length - 1; i++) {
        for (let j = i; j <= array.length - 1; j++) {
            if (array[i] >= array[j]) {
                currentNumber = array[i];
            } else {
                currentNumber = 0;
            }
        }
        if (currentNumber != 0) {
            maxArray.push(currentNumber);
        }
    }

    console.log(maxArray);
}

maxNumber([1, 4, 3, 2])