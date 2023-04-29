function lettersNumbers(input) {
    let result = [];
    let splitted = input.split(' ');
    for (let element of splitted) {
        if (element.length > 0) {
            let array = element.split('');
            let firstLetter = array.shift();
            let lastLetter = array.pop();
            let number = Number(array.join(''));

            if (firstLetter.charCodeAt(0) >= 65 && firstLetter.charCodeAt(0) <= 90) {
                number /= Number(firstLetter.charCodeAt(0) - 65 + 1);
            } else {
                number *= Number(firstLetter.charCodeAt(0) - 97 + 1);
            }

            if (lastLetter.charCodeAt(0) >= 65 && lastLetter.charCodeAt(0) <= 90) {
                number -= Number(lastLetter.charCodeAt(0) - 65 + 1);
            } else {
                number += Number(lastLetter.charCodeAt(0) - 97 + 1);
            }
            result.push(number);
        }
    }
    let final = 0;

    for (let num of result) {
        final += num;
    }
    console.log(final.toFixed(2));
}

lettersNumbers('P34562Z q2576f   H456z')

//ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90 uppercase
//ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122 lowercase