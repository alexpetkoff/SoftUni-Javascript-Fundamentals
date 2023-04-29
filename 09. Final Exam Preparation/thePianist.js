function thePianist(array) {

    let numOfPieces = +array.shift();
    let mapOfPieces = new Map();

    for (let i = 0; i < numOfPieces; i++) {
        let currentLine = array.shift();
        let [piece, composer, key] = currentLine.split('|');
        mapOfPieces.set(piece, [composer, key]);
    }

    let index = 0;

    while (array[index] != 'Stop') {

        if (array[index].includes('Add|')) {
            let [command, piece, composer, key] = array[index].split('|');
            if (mapOfPieces.has(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                mapOfPieces.set(piece, [composer, key]);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            }
        } else if (array[index].includes('Remove|')) {
            let [command, piece, composer, key] = array[index].split('|');
            if (mapOfPieces.has(piece)) {
                console.log(`Successfully removed ${piece}!`);
                mapOfPieces.delete(piece);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (array[index].includes('ChangeKey|')) {
            let [command, piece, newkey] = array[index].split('|');
            if (mapOfPieces.has(piece)) {
                let [composer, oldkey] = mapOfPieces.get(piece);
                mapOfPieces.set(piece, [composer, newkey]);
                console.log(`Changed the key of ${piece} to ${newkey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
        index++;
    }

    for (let [key, value] of mapOfPieces) {
        console.log(`${key} -> Composer: ${value[0]}, Key: ${value[1]}`);
    }

}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);