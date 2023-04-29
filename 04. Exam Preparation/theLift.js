function theLift(array) {

    let peopleToLift = +array.shift();
    let wagons = array.shift().split(' ').map(Number);

    let index = 0;

    while (index !== wagons.length && peopleToLift !== 0) {
        let ppl = wagons[index];
        while (ppl !== 4 && peopleToLift !== 0) {
            ppl++;
            peopleToLift--;
        }
        wagons.splice(index, 1, ppl);
        index++;
    }

    if (wagons.includes(0) || wagons.includes(1) || wagons.includes(2) || wagons.includes(3) && peopleToLift === 0) {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    } else if (!wagons.includes(0) && !wagons.includes(1) && !wagons.includes(2) && !wagons.includes(3) && peopleToLift > 0) {
        console.log(`There isn't enough space! ${peopleToLift} people in a queue!`);
        console.log(wagons.join(' '));
    } else if (!wagons.includes(0) || !wagons.includes(1) || !wagons.includes(2) || !wagons.includes(3) && peopleToLift === 0) {
        console.log(wagons.join(' '));
    }

}


theLift([
    "20",
    "0 2 0 2 0 0"
]);