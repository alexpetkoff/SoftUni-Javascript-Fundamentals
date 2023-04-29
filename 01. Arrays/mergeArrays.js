function mergeArrays(arr1, arr2) {

    let arr3 = [];

    for (let el in arr1) {
        if (el % 2 === 0) {
            let sum = Number(arr1[el]) + Number(arr2[el]);
            arr3.push(sum);
        } else {
            let concatenate = arr1[el] + arr2[el];
            arr3.push(concatenate);
        }
    }

    console.log(arr3.join(" - "));

}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)