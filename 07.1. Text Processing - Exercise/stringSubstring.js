function stringSubstring(word, string) {

    let wordToLowerCase = word.toLowerCase();

    let stringSplitted = string.split(' ');
    let isFound = true;
    for(let element of stringSplitted) {
        element = element.toLowerCase();
        if(element === wordToLowerCase) {
            isFound = true;
            break;
        } else {
            isFound = false;
        }
    }
    if(isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

stringSubstring('javascript','JavaScript is the best programming language')