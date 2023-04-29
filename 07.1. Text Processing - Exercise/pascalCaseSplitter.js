function pascalSplitter(wordToSplit) {

    let current = '';
    for(let i = 0; i < wordToSplit.length; i++) {
        if(wordToSplit.charCodeAt(i) >= 65 && wordToSplit.charCodeAt(i) <= 90) {
            if(current.length > 0) {
                current += ' ' + wordToSplit[i];
            } else {
                current += wordToSplit[i];
            }
        } else {
            current += wordToSplit[i];
        }
    }
    console.log(current.split(' ').join(', '));
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')