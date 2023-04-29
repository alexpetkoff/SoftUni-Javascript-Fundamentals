function cutAndReverse(input) {
    let firstHalf = input.slice(0, input.length / 2);
    let secondHalf = input.slice(input.length / 2);
    console.log(firstHalf.split('').reverse().join(''));
    console.log(secondHalf.split('').reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')