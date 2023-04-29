function starEnigma(input) {

    let messageCount = input.shift();
    let pattern = /[s,t,a,r,S,T,A,R]/g;
    let decryptedArray = [];

    let planetPattern = /\@(?<planet>[A-Za-z]+)/g;
    let populationPattern = /\:(?<population>\d+)/g;
    let attackPattern = /\!(?<attack>[A,D])\!/g;
    let soldiersPattern = /\->(?<soldiers>\d+)/g;

    for (let i = 0; i < messageCount; i++) {
        let count = input[i].match(pattern).length;
        let decrypted = '';
        for (let el of input[i]) {
            let newEl = el.charCodeAt() - count;
            decrypted += String.fromCharCode(newEl);
        }
        decryptedArray.push(decrypted);
    }

    let attackedPlanets = [];
    let destroyedPlanets = [];

    for (let el of decryptedArray) {
        let planetName = el.match(planetPattern);
        let population = el.match(populationPattern);
        let attack = el.match(attackPattern);
        let soldiers = el.match(soldiersPattern);
        if (planetName !== null && population !== null && attack !== null && soldiers !== null) {
            if (attack[0] === '!A!') {
                let finalName = planetName[0].slice(1, planetName[0].length);
                attackedPlanets.push(finalName);
            } else if (attack[0] === '!D!') {
                let finalName = planetName[0].slice(1, planetName[0].length);
                destroyedPlanets.push(finalName);
            }
        }
    }
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    attackedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(el => console.log(`-> ${el}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(el => console.log(`-> ${el}`));
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);