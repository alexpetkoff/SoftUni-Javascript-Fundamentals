function modernHashTag(input) {

    let splittedInput = input.split(' ');
    let words = [];
    
    for(let element of splittedInput) {
        if(element.includes('#') && element.length > 1) {
            let isLetters = true;
            let elToLower = element.toLowerCase().replace('#', '');
            for(let i = 0; i < elToLower.length; i++) {
                if(elToLower.charCodeAt(i) > 96 && elToLower.charCodeAt(i) < 123) {
                    isLetters = true;
                } else {
                    isLetters = false;
                    break;
                }
            }
            if(isLetters) {
                words.push(element);
            }
        }   
    }
    for(let el of words) {
        console.log(el.replace('#', ''));
    }
}

modernHashTag('The symbol # is known #vario2usly in English-speaking #regions as the #number sign');