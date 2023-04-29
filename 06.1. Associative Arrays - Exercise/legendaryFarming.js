function legendary(str) {

    let array = str.split(' ').map(a => a.toLowerCase());

    let keyMaterials = {
        'shards': 0,
        'fragments': 0,
        'motes': 0
    };
    let junkMaterials = {};

    let shadowmourne = 250;
    let valanyr = 250;
    let dragonwrath = 250;
    let legendaryItem = '';
    
    let index = 0;

    while(dragonwrath != 0 && valanyr != 0 && shadowmourne != 0) {
        let quantity = +array[index];
        let material = array[index + 1];
        
        switch(material) {
            case 'shards':
                if (quantity >= shadowmourne) {
                    quantity -= shadowmourne;
                    shadowmourne = 0;
                    legendaryItem = 'Shadowmourne';
                    keyMaterials['shards'] = quantity;
                } else {
                    shadowmourne -= quantity;
                    keyMaterials['shards'] = keyMaterials['shards'] + quantity;
                }
                break;
            case 'fragments':
                if (quantity >= valanyr) {
                    quantity -= valanyr;
                    valanyr = 0;
                    legendaryItem = 'Valanyr';
                    keyMaterials['fragments'] = quantity;
                } else {
                    valanyr -= quantity;
                    keyMaterials['fragments'] = keyMaterials['fragments'] + quantity;
                }
                break;
            case 'motes':
                if (quantity >= dragonwrath) {
                    quantity -= dragonwrath;
                    dragonwrath = 0;
                    legendaryItem = 'Dragonwrath';
                    keyMaterials['motes'] =  quantity;
                } else {
                    dragonwrath -= quantity;
                    keyMaterials['motes'] = keyMaterials['motes'] + quantity;
                }
                break;
            default:
                if(!junkMaterials.hasOwnProperty(material)) {
                    junkMaterials[material] = quantity;
                } else {
                    junkMaterials[material] += quantity;
                }
                break;
        }
        index += 2;
    }
    
    let arrayKeyMaterials = Object.entries(keyMaterials);
    let arrayJunkMaterials = Object.entries(junkMaterials);

    let sortedKeyMaterials = arrayKeyMaterials.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedJunkMaterials = arrayJunkMaterials.sort((a,b) => a[0].localeCompare(b[0]));
    
    console.log(`${legendaryItem} obtained!`);

    for(let el of sortedKeyMaterials) {
        let material = el[0];
        let quantity = el[1];
        console.log(`${material}: ${quantity}`);
    }
    for(let el of sortedJunkMaterials) {
        let material = el[0];
        let quantity = el[1];
        console.log(`${material}: ${quantity}`);
    }

}

legendary('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');