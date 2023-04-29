function worldTour(array) {
    let i = 0;
    let destinations = array[i];
    i++;
    while (array[i] != "Travel") {
        if (array[i].includes("Add")) {
            let command = array[i].replace("Add ", "");
            let commandSplit = command.split(":");
            let startIndex = Number(commandSplit[1]);
            if (startIndex >= destinations.length || startIndex < 0) {
                //destinations = destinations.substring(0, startIndex) + commandSplit[2] + destinations.substring(startIndex);
                console.log(destinations);
            } else {
                destinations = destinations.substring(0, startIndex) + commandSplit[2] + destinations.substring(startIndex);
                console.log(destinations);
            
            }
        } else if (array[i].includes("Remove")) {
            let command = array[i].replace("Remove ", "");
            let commandSplit = command.split(":");
            let startIndex = Number(commandSplit[1]);
            let endIndex = Number(commandSplit[2]);
            if (!destinations[startIndex] || !destinations[endIndex]) {
                //destinations = destinations.slice(0, startIndex) + destinations.slice(endIndex + 1);
                console.log(destinations);
                
            } else {
                destinations = destinations.slice(0, startIndex) + destinations.slice(endIndex + 1);
                console.log(destinations);

            }
        } else if (array[i].includes("Switch")) {
            let commandSplit = array[i].split(":");
            let regEx = new RegExp(commandSplit[1], "g");
            destinations = destinations.replace(regEx, commandSplit[2]);
            console.log(destinations);
        }
        i++;
    }
    console.log(`Ready for world tour! Planned stops: ${destinations}`);
}

worldTour(["Hawai::Cyprys-Greece-Hawai",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);