function sorting(array) {

    let newArray = [];
    let sorted = array.sort((a, b) => b - a);

    while (sorted.length > 0) {
        let first = sorted.shift();
        let second = sorted.pop();
        newArray.push(first);
        newArray.push(second);
    }

    console.log(newArray.join(' '));

}

sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]); 