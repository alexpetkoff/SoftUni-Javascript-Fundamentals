function revealWords(word, sentence) {
    let newWord = '';

    if (word.includes(', ')) {
        newWord = word.split(', ');
        for (let element of newWord) {
            sentence = sentence.replace('*'.repeat(element.length), element);
        }
    } else {
        newWord = word;
        sentence = sentence.replace('*'.repeat(word.length), word);
    }
    console.log(sentence);
}

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');