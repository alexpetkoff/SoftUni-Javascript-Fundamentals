function equalSums(array) {
    let br = 0;
    for (let el in array) {

        let sumToNumber = 0;
        let sumAfterNumber = 0;

        for (let i = 0; i < el; i++) {
            sumToNumber += array[i];
        }

        for (let i = array.length - 1; i > el; i--) {
            sumAfterNumber += array[i];
        }

        if (sumToNumber == sumAfterNumber) {
            console.log(el);
            br++;
        }
    }
    if (br == 0) {
        console.log('no');
    }

}

equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
equalSums([1, 2, 3, 3]);


/* 
Write a function that determines if there exists an element in the array of numbers such that the sum of the elements on its left is equal to the sum of the elements on its right. If there are NO elements to the left/right, their sum is 0. Print the index that satisfies the required condition or "no" if there is no such index.
*/