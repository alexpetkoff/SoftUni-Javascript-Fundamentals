function toUpperCase(input) {

    let inputUp = input.toUpperCase();
    let pattern = /[A-Za-z]+/g;
    let sentence = inputUp.split(' ');
    let result = [];

    for(let el of sentence) {
        let word = el.match(pattern);
        result.push(word);
    }

    console.log(result.join(', '));
}

toUpperCase('Hi, how are you?');