function ladybugs(array) {

    let fieldSize = array.shift();
    let startIndexBugs = array.shift().split(' ').map((x) => Number(x));
    let field = [];
    let commands = array;
    

    for(let i = 0; i < fieldSize; i++) {

        for(let y = 0; y < startIndexBugs.length; y++) {
            if(startIndexBugs[y] === i) {
                field.push(1);
                startIndexBugs.shift();
            } else {
                field.push(0);
            }
        }
        if(startIndexBugs.length == 0) {
            field.push(0);
        }

    }

    for(let command of commands) {
        let [startIndex, direction, flyLength] = command.split(' ');
        startIndex = +startIndex;
        flyLength = +flyLength;
       
        if (field[startIndex] === 1) {
            field[startIndex] = 0;
            if (direction === 'right') {
                while(field[startIndex + flyLength] != 0 && field[startIndex + flyLength] != undefined) {
                    flyLength += flyLength;
                }
                field[startIndex + flyLength] = 1;
            } else {
                while(field[startIndex - flyLength] != 0 && field[startIndex - flyLength] != undefined) {
                    flyLength -= flyLength;
                }
                field[startIndex - flyLength] = 1;
            }
        }
    }

    let result = '';
        for(let y = 0; y < fieldSize; y++) {
        result += field[y] + ' ';
    }

    console.log(result);
}

ladybugs([ 3, '0 1',

'0 right 1',

'2 right 1' ]);