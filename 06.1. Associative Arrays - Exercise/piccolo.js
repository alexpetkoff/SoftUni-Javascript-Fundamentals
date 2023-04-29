function piccolo(array) {

    let parkingLot = new Map();

    for (let el of array) {
        let [direction, carNumber] = el.split(', ');
        let num = Number(carNumber.slice(2, -2));
        if (direction === 'IN') {
            parkingLot.set(carNumber, num);
        } else {
            parkingLot.delete(carNumber);
        }
    }

    let arrayOfcarNumbers = Array.from(parkingLot.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    
    if(parkingLot.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (let x of arrayOfcarNumbers) {
            console.log(x[0]);
        }
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);