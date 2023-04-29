function searchForNumber(integers, task) {
    let deletedNums = task[0];
    let toDelete = task[1];
    let searchedNum = task[2];
    let manipulatedArray = integers.splice(0, deletedNums);
    let oneMoreTime = manipulatedArray.splice(0, toDelete);
    let br = 0;

    for (let el of manipulatedArray) {
        if (el === searchedNum) {
            br++;
        }
    }

    console.log(`Number ${searchedNum} occurs ${br} times.`);
}

searchForNumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5])