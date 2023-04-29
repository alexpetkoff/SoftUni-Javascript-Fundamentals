function oddOccurencies(stringOfWords) {

    let arrayToLowerCase = stringOfWords.toLowerCase().split(' ');
    let mapOfOccurencies = new Map();

    for (let element of arrayToLowerCase) {
        if (!mapOfOccurencies.has(element)) {
            mapOfOccurencies.set(element, 1);
        } else {
            mapOfOccurencies.set(element, mapOfOccurencies.get(element) + 1);
        }
    }

    let arrayOfOddOccurencies = [];

    for (let element of Array.from(mapOfOccurencies.entries())) {
        if (element[1] % 2 !== 0) {
            arrayOfOddOccurencies.push(element[0]);
        }
    }
    console.log(arrayOfOddOccurencies.join(' '));
}

oddOccurencies('Cake IS SWEET is Soft CAKE sweet Food');