function arrayRotation(array, rotations) {

    for (let i = 0; i < rotations; i++) {
        array.push(array[0]);
        array.shift(array);
    }

    console.log(array);
}

arrayRotation([51, 47, 32, 61, 21], 2);