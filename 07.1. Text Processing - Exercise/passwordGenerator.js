function passwordGenerator(input) {
    let concatenated = input[0].concat(input[1]).split('');
    let thirdString = input[2].toUpperCase().split('');
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    let result = [];

    for(let i = 0; i < concatenated.length; i++) {
        if(vowels.includes(concatenated[i])) {
            result.push(thirdString[count]);
            count++;
            if(count === thirdString.length) {
                count = 0;
            }
        } else {
            result.push(concatenated[i]);
        }
    }
    console.log(`Your generated password is ${result.reverse().join('')}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ])