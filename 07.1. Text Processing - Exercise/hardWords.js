function hardWords(input) {

    let letter = input[0];
    let words = input[1];
    let blankSpaces = [];

    words.sort((a,b) => b.length - a.length);

    for(let word of words) {
        let blankSpace = '_'.repeat(word.length);
        blankSpaces.push(blankSpace);
    }
    
    for(let i = 0; i < blankSpaces.length; i++) {
        if(letter.includes(blankSpaces[i])) {
           letter = letter.replace(blankSpaces[i], words[i]);
        }
    }

    console.log(letter);
}

hardWords(
    ['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])