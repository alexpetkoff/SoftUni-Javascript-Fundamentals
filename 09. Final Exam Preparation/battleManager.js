function battleManager(array) {

    let mapPerson = new Map();
    let index = 0;

    while (array[index] != 'Results') {
        if (array[index].includes('Add:')) {
            let [command, name, health, energy] = array[index].split(':');
            health = Number(health);
            energy = Number(energy);
            if (!mapPerson.has(name)) {
                mapPerson.set(name, [health, energy]);
            } else {
                let [oldHealth, oldEnergy] = mapPerson.get(name);
                mapPerson.set(name, [health + oldHealth, oldEnergy]);
            }
        } else if (array[index].includes('Attack:')) {
            let [command, attacker, defender, damage] = array[index].split(':');
            +damage;
            if (mapPerson.has(attacker) && mapPerson.has(defender)) {
                let [atkHealth, atkEnergy] = mapPerson.get(attacker);
                let [defHealth, defEnergy] = mapPerson.get(defender);
                defHealth -= damage;
                atkEnergy -= 1;
                if (defHealth <= 0) {
                    mapPerson.delete(defender);
                    console.log(`${defender} was disqualified!`);
                } else {
                    let [health, energy] = mapPerson.get(defender);
                    mapPerson.set(defender, [defHealth, energy]);
                }
                if (atkEnergy === 0) {
                    mapPerson.delete(attacker);
                    console.log(`${attacker} was disqualified!`);
                } else {
                    let [health, energy] = mapPerson.get(attacker);
                    mapPerson.set(attacker, [health, atkEnergy]);
                }
            }
        } else if (array[index].includes('Delete:')) {
            let [command, target] = array[index].split(':');
            if (target === 'All') {
                mapPerson.clear();
            } else {
                mapPerson.delete(target);
            }
        }
        index++;
    }
    console.log(`People count: ${mapPerson.size}`);
    for (let [key, value] of mapPerson) {
        console.log(`${key} - ${value[0]} - ${value[1]}`);
    }
}

battleManager(["Add:Bonnie:3000:5",
"Add:Kent:10000:10",
"Add:Johny:4000:10",
"Attack:Johny:Bonnie:400",
"Add:Johny:3000:5",
"Add:Peter:7000:1",
"Delete:Kent",
"Results"]);