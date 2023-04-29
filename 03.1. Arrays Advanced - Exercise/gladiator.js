function gladiator(array) {

    let inventory = array.shift().split(" ");

    for (let i = 0; i < array.length; i++) {
        let [command, item] = array[i].split(' ');
        switch (command) {
            case 'Buy':
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case 'Trash':
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    let deleted = inventory.splice(index, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    let deleted = inventory.splice(index, 1);
                    inventory.push(deleted);
                }
                break;
            case 'Upgrade':
                let [itemUpgraded, type] = item.split("-");
                if (inventory.includes(itemUpgraded)) {
                    let index = inventory.indexOf(itemUpgraded);
                    inventory.splice(index + 1, 0, `${itemUpgraded}:${type}`);
                }
                break;
            default: break;
        }
    }
    console.log(inventory.join(' '));
}

gladiator(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']);