function dungeon(array) {

    let health = 100;
    let coins = 0;

    let converted = array.toString();
    let newArray = converted.split("|");

    for (let el in newArray) {
        let action = newArray[el].split(" ");

        if (action[0] === "potion") {
            health += Number(action[1]);
            if (health > 100) health = 100;
            console.log(`You healed for ${action[1]} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (action[0] === "chest") {
            console.log(`You found ${action[1]} coins.`);
            coins += Number(action[1]);
        } else {
            health -= Number(action[1]);
            if(health <= 0) {
                console.log(`You died! Killed by ${action[0]}.`);
                console.log(`Best room: ${el + 1}`);
                break;
            } else {
                console.log(`You slayed ${action[0]}.`);
            }
        }
    }
    if(health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }


}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);