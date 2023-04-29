function asciiSumator(array) {

    let [firstChar, secondChar, string] = array;
    let sum = 0;

    for(let ch of string) {
        if(firstChar.charCodeAt(0) < secondChar.charCodeAt(0)) {
            if(ch.charCodeAt(0) > firstChar.charCodeAt(0) && ch.charCodeAt(0) < secondChar.charCodeAt(0)) {
                sum += ch.charCodeAt(0);
            }
        } else {
            if(ch.charCodeAt(0) > secondChar.charCodeAt(0) && ch.charCodeAt(0) < firstChar.charCodeAt(0)) {
                sum += ch.charCodeAt(0);
            }
        }   
    }
    console.log(sum);
}

asciiSumator(['a',
'1',
'jfe392$#@j24ui9ne#@$']);