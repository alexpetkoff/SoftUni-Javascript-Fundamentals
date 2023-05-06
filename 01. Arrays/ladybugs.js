function ladybugs(array) {

    let fieldSize = array.shift();
    let startIndexBugs = array.shift().split(' ').map((x) => Number(x));
    let field = [];
    let commands = array;
    
    for(let i = 0; i < fieldSize; i++) {
        let currentBugPosition = startIndexBugs.shift();
        if(i === currentBugPosition) {
            field.push(1);
        } else {
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
            } else {
                while(field[startIndex - flyLength] != 0 && field[startIndex - flyLength] != undefined) {
                    flyLength -= flyLength;
                }
            }
            field[startIndex + flyLength] = 1;
        }
    }
    let result = '';
        for(let y = 0; y < fieldSize; y++) {
        result += field[y] + ' ';
    }

    console.log(result)
    
}

ladybugs([ 5, '3', '3 left 2', '1 left -2']);