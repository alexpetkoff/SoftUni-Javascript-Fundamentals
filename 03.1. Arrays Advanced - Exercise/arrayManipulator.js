function arrayManipulator(array, commands) {
    let x = 0;
    let result = array.splice(0);

    while (commands[x] != 'print') {
        let toDo = commands[x].split(' ');
        if (toDo[0] === 'add') {
            result.splice(Number(toDo[1]), 0, Number(toDo[2]));
        } else if (toDo[0] === 'addMany') {
            let index = Number(toDo[1]);
            for (let i = 2; i < toDo.length; i++) {
                result.splice(index, 0, Number(toDo[i]));
                index++;
            }
        } else if (toDo[0] === 'contains') {
            if (result.includes(Number(toDo[1]))) {
                console.log(result.indexOf(Number(toDo[1])));
            } else {
                console.log(-1);
            }
        } else if (toDo[0] === 'remove') {
            result.splice(Number(toDo[1]), 1);
        } else if (toDo[0] === 'shift') {
            let positions = Number(toDo[1]);
            for (let i = 0; i < positions; i++) {
                rotateLeft(result);
            }
        } else if (toDo[0] === 'sumPairs') {
            let newArr = [];
            if (result.length % 2 === 0) {
                for (let i = 0; i < result.length; i += 2) {
                    let sum = result[i] + result[i + 1];
                    newArr.push(sum);
                }
                result = newArr.splice(0);
            } else {
                for (let i = 0; i < result.length - 1; i += 2) {
                    let sum = result[i] + result[i + 1];
                    newArr.push(sum);
                }
                let lastEl = result.pop();
                result = newArr.splice(0);
                result.push(lastEl);
            }
        }
        x++;
    }

    console.log(`[ ${result.join(', ')} ]`);

    function rotateLeft(arr) {
        let first = arr.shift();
        arr.push(first);
    }
}

arrayManipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'sumPairs', 'print']);

(9)[2, 3, 5, 9, 8, 7, 6, 5, 1]