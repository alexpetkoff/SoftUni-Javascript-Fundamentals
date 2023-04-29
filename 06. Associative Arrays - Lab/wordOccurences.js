function wordOccurences(array) {

    let mapOfWords = new Map();

    for(let word of array) {
        if(!mapOfWords.has(word)) {
            mapOfWords.set(word, 1);
        } else {
        mapOfWords.set(word, (mapOfWords.get(word) + 1));
        }
    }
    let entriesOfMap = Array.from(mapOfWords.entries());
    entriesOfMap.sort((a, b) => b[1] - a[1]);
    
    for(let element of entriesOfMap) {
        console.log(`${element[0]} -> ${element[1]} times`);
    }
    
}

wordOccurences(
    ["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]
);