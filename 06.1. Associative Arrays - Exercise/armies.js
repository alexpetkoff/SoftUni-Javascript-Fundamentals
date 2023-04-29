function armies(input) {

    let leaders = {};

    for (let element of input) {
        if (element.includes('arrives')) {
            let leaderName = element.replace(' arrives', '');
            leaders[leaderName] = {};
        }
        if (element.includes(':')) {
            let [leaderName, armyInfo] = element.split(': ');
            let [armyName, armySize] = armyInfo.split(', ');
            armySize = + armySize;
            if (leaders.hasOwnProperty(leaderName)) {
                leaders[leaderName][armyName] = armySize;
            }
        }
        if (element.includes('+')) {
            let [armyName, armyCount] = element.split(' + ');
            armyCount = +armyCount;
            for (let el in leaders) {
                if (leaders[el].hasOwnProperty(armyName)) {
                    leaders[el][armyName] += armyCount;
                }
            }
        }
        if (element.includes('defeated')) {
            let leader = element.replace(' defeated', '');
            delete leaders[leader];
        }
    }
    let arrayOfLeaders = [];

    for (let key in leaders) {
        let array = Object.entries(leaders[key]);
        let totalArmyCount = 0;
        for (let el of array) {
            totalArmyCount += el[1];
        }
        arrayOfLeaders.push([key, totalArmyCount]);
    }
    let sortedArrayOfLeaders = arrayOfLeaders.sort((a, b) => b[1] - a[1]);

    for (let leader of sortedArrayOfLeaders) {
        console.log(`${leader[0]}: ${leader[1]}`);
        let arrayOfArmies = Object.entries(leaders[leader[0]]);
        let sortedArrayOfArmies = arrayOfArmies.sort((a, b) => b[1] - a[1])
        for (let army of sortedArrayOfArmies) {
            console.log(`>>> ${army[0]} - ${army[1]}`);
        }
    }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205']);