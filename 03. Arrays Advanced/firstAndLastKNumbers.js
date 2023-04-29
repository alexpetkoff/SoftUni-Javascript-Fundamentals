function firstAndLastKNumbers(array) {

    let k = array[0];
    array.splice(0, 1);

    let firstK = array.slice(0, k);
    let lastK = array.slice(-k);

    console.log(firstK.join(" "));
    console.log(lastK.join(" "));
}

firstAndLastKNumbers([3,
    6, 7, 8, 9]);