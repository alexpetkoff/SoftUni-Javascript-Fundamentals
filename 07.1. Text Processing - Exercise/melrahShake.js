function melrahShake(array) {

    let sentence = array[0];
    let pattern = array[1];
    let firstIndex = sentence.indexOf(pattern);
    let lastIndex = sentence.lastIndexOf(pattern);

    while (firstIndex != lastIndex && pattern.length > 0) {
        sentence = sentence.slice(0, lastIndex) + sentence.slice(lastIndex + pattern.length);
        sentence = sentence.slice(0, firstIndex) + sentence.slice(firstIndex + pattern.length);
        console.log('Shaked it.');
        let currentPattern = pattern.split('');
        currentPattern.splice(pattern.length / 2, 1);
        pattern = currentPattern.join('');
        firstIndex = sentence.indexOf(pattern);
        lastIndex = sentence.lastIndexOf(pattern);
    }
    console.log('No shake.');
    console.log(sentence);
}

melrahShake(
    ['astalavista baby',
'sta']
);