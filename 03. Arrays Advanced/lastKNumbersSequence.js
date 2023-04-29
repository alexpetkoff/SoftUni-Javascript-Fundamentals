function lastKNumbersSequence(n, k) {

    let array = [1];

    for (let i = 1; i < n; i++) {
        let tempArray = array.slice(-k);
        let result = 0;
        for (let el of tempArray) {
            result = result + el;
        }
        array.push(result);
    }
    console.log(array.join(" "));

}

lastKNumbersSequence(8, 2);