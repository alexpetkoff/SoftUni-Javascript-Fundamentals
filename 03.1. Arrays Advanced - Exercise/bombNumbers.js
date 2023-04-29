function bomb(sequence, bombNums) {

    let copiedSequence = sequence.splice(0);
    let specialNum = bombNums[0];
    let specialNumPower = bombNums[1];

    while (copiedSequence.includes(specialNum)) {
        let index = copiedSequence.indexOf(specialNum);
        let start = index - specialNumPower;
        
        if (start < 0) {
            start = 0;
            let cut = copiedSequence.splice(start, (index + specialNumPower + 1));
        } else {
            let cut = copiedSequence.splice(start, (specialNumPower * 2 + 1));
        }
    }

    let sum = 0;
    for (let x of copiedSequence) {
        sum += x;
    }
    console.log(sum);
}

bomb([1,1,4, 2, 2, 2, 9,1],
    [4, 2]);