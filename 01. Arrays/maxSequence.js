function maxSequence(array) {

    let max = [];
    for (let i = 0; i < array.length; i++) {
        let current = [];
        for (let j = i; j < array.length; j++) {
            if (array[j] === array[i]) {
                current.push(array[i]);
            } else {
                break;
            }
        }
        if (current.length > max.length) {
            max = current;
        }
    }
    console.log(max.join(" "));
}

maxSequence([4, 4, 4, 4]);