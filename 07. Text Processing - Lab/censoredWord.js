/* function censoredWord(sentence, word) {
    let star = '*';
    let censoredSentence = sentence.replaceAll(` ${word} `, ` ${star.repeat(word.length)} `);
    console.log(censoredSentence);
} */

function censoredWord(sentence, word) {
    let newSentence = sentence.split(word);
    let censored = newSentence.join('*'.repeat(word.length));
    console.log(censored);
}

censoredWord('A small sentence with some words', 'small');