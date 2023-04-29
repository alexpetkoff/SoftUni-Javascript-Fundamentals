function cardGame(input) {

    let typeOfCards = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1
    };

    let powerOfCards = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }

    let mapPLayers = new Map();

    for(let el of input) {
        let [name, cards] = el.split(': ');
        let cardsSplit = cards.split(', ');
        if (!mapPLayers.has(name)) {
            let setOfCards = new Set(cardsSplit);
            let arrayOfCards = Array.from(setOfCards);
            mapPLayers.set(name, arrayOfCards);
        } else {
            let currentCards = cardsSplit;
            let ownedCards = mapPLayers.get(name);
            for (let el of currentCards) {
                ownedCards.push(el);
            }
            let uniqueCards = [...new Set(ownedCards)];
            let arrayOfCards = Array.from(uniqueCards);
            mapPLayers.set(name, arrayOfCards);
        }
    }
    
    for(let [name, cards] of mapPLayers) {
        let currentPower = 0;
        for(let el of cards) {
            let power = el.substring(0, el.length -1)
            let type = el.slice(el.length - 1);
            currentPower += typeOfCards[type] * powerOfCards[power];
        }    
        console.log(`${name}: ${currentPower}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);