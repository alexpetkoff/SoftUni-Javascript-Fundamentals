function addAndSubstract(array) {
    let sumOfOldArray = 0;
    for (let el of array){
        sumOfOldArray += Number(el);
    }

    for (let el in array) {

        if (array[el] % 2 === 0) {
            array[el] += Number(el);
        } else {
            array[el] -= Number(el);
        }

    }
    
    let sumOfNewArray = 0;

    for (let el of array){
        sumOfNewArray += Number(el);
    }
    console.log(array);
    console.log(sumOfOldArray);
    console.log(sumOfNewArray);

}

addAndSubstract([5, 15, 23, 56, 35])


/*
Write a function, which changes the value of odd and even numbers in an array of numbers. 
If the number is even - add to its value its index position
If the number is odd - subtract to its value its index position

Output

On the first line print the newly modified array, on the second line print the sum of numbers from the original array, on the third line print the sum of numbers from the modified array.

*/