function countString(sentence, word) {
    let sentenceArray = sentence.split(' ');
    let count = 0;
    for(let check of sentenceArray) {
        if(check === word) {
            count++;
        }
    }
    console.log(count);
}

countString('This is a word and it also is a sentence',
'is');