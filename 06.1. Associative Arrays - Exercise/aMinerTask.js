function aMinerTask(input) {

    let mapResources = new Map();
    let currentResource = undefined;

    for (let line in input) {
        if (line % 2 === 0) {
            let resource = input[line];
            if (mapResources.has(resource)) {
                mapResources.set(resource, mapResources.get(resource));
            } else {
                mapResources.set(resource, 0);
            }

            currentResource = resource;

        } else {
            let quantity = Number(input[line]);
            mapResources.set(currentResource, mapResources.get(currentResource) + quantity);
        }
    }

    for (let [resource, quantity] of mapResources) {
        console.log(`${resource} -> ${quantity}`);
    }
}

aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);