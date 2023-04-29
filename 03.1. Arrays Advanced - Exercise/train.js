function train(commands) {
    let wagons = commands.splice(0, 1);
    let wagonsArr = wagons[0].split(' ');
    let maxCap = Number(commands.splice(0, 1));

    for (let el of commands) {
        let command = el.split(' ');
        switch (command[0]) {
            case 'Add':
                wagonsArr.push(command[1]);
                break;
            default:
                for (let i in wagonsArr) {
                    if ((Number(wagonsArr[i]) + Number(command[0]) <= maxCap)) {
                        wagonsArr[i] = (Number(wagonsArr[i]) + Number(command[0]));
                        break;
                    }
                }
                break;
        }
    }

    console.log(wagonsArr.join(' '));
}

train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']);