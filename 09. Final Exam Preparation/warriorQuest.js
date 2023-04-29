function warriorQuest(array) {

    let skill = array[0];
    array.shift();
    let i = 0;

    while (array[i] != "For Azeroth") {

        let command = array[i].split(" ");

        if (command[0] === 'GladiatorStance') {
            skill = skill.toUpperCase();
            console.log(skill);
        } else if (command[0] === 'DefensiveStance') {
            skill = skill.toLowerCase();
            console.log(skill);
        } else if (command[0] === 'Dispel') {
            if (Number(command[1]) > skill.length - 1) {
                console.log('Dispel too weak.');
            } else {
                skill = skill.substring(0, Number(command[1])) + command[2] + skill.substring(Number(command[1]) + 1);
                console.log("Success!");
            }
        } else if (command[0] === 'Target') {
            if (command[1] === 'Change') {
                if (skill.includes(command[2])) {
                    let regex = new RegExp(command[2], 'g');
                    skill = skill.replace(regex, command[3]);
                    console.log(skill);
                } else {
                    console.log(skill);
                }
            } else if (command[1] === 'Remove') {
                if (skill.includes(command[2])) {
                    let regex = new RegExp(command[2], 'g');
                    skill = skill.replace(regex, '');
                    console.log(skill);
                }
            } else {
                console.log("Command doesn't exist!");
            }
        } else {
            console.log("Command doesn't exist!");
        }
        i++;
    }
}

warriorQuest(["DYN4MICNIC",
"Target Remove NIC",
"Dispel 3 A",
"DefensiveStance",
"Target Change d D",
"Target change D d",
"For Azeroth"])