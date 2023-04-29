function arenaTier(input) {

    let arena = {};

    for (let line of input) {
        if(line === 'Ave Cesar') {
            break;
        }
        if (line.includes('->')) {
            let [gladiator, technique, skill] = line.split(' -> ');
            skill = +skill;
            addTechnique(gladiator, technique, skill);
        }
        if (line.includes('vs')) {
            let [gladA, gladB] = line.split(' vs ');
            addBattle(gladA, gladB);
        }
    }

    let arrayGladAndPower = [];
    let sortedArrayTotalPower = []
    for(let x in arena) {
        let skills = Object.values(arena[x]);
        let powers = Object.entries(arena[x]);
        let powersToSort = [];

        for(let el of powers) {
           powersToSort.push([el[0], el[1]]);
        }
        let sortedPowers = powersToSort.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        let totalPower = 0;
        let name = x;
        for(let el of skills) {
            totalPower += el;
        }
        arrayGladAndPower.push([name, totalPower, sortedPowers]);
        sortedArrayTotalPower = arrayGladAndPower.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    }
    
    for(let el in sortedArrayTotalPower){
        console.log(`${sortedArrayTotalPower[el][0]}: ${sortedArrayTotalPower[el][1]} skill`);
        for(let x of sortedArrayTotalPower[el][2]) {
            console.log(`- ${x[0]} <!> ${x[1]}`);
        }
    }
    

    /////////// FUNCTIONS ////////////
    function addTechnique(gladiator, technique, skill) {
        if(!arena.hasOwnProperty(gladiator)) {
            arena[gladiator] = {};
            arena[gladiator][technique] = skill;
        }
        if(arena[gladiator].hasOwnProperty(technique)) {
            if(arena[gladiator][technique] < skill) {
                arena[gladiator][technique] = skill;
            }
        }
        if(!arena[gladiator].hasOwnProperty(technique)) {
            arena[gladiator][technique] = skill;
        }
    }

    function addBattle(gladA, gladB) {
        if (arena.hasOwnProperty(gladA) && arena.hasOwnProperty(gladB)) {
            let skillsA = arena[gladA];
            let skillsB = arena[gladB];

            for(let x in skillsA) {
                for(let y in skillsB) {
                    if (x === y) {
                        if (skillsA[x] > skillsB[y]) {
                            delete arena[gladB];
                        }
                        if (skillsA[x] < skillsB[y]) {
                            delete arena[gladA];
                        }
                    }
                }
            }
        }
    }

}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
    ]);