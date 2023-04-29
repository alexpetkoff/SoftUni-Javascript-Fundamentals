function wordsTracker(array) {

    let wordsToLookFor = array.shift().split(' ');
    let mapOfWords = new Map();

    for (let word of wordsToLookFor) {
        mapOfWords.set(word, 0);
        for (let wordToCheck of array) {
            if (word === wordToCheck) {
                mapOfWords.set(word, mapOfWords.get(word) + 1);
            }
        }
    }

    let sortedMapOfWords = Array.from(mapOfWords).sort((a, b) => b[1] - a[1]);

    for (let el of sortedMapOfWords) {
        console.log(`${el[0]} - ${el[1]}`);
    }
}

wordsTracker(
    [
        'is the sex',
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);