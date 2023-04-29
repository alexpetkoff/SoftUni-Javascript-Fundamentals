function worldTour(array) {

    let startString = array.shift();
    let index = 0;

    while (array[index] != 'Travel') {
        if (array[index].includes('Add Stop:')) {
            let newLine = array[index].replace('Add Stop:', '');
            let [position, dest] = newLine.split(':');
            position = + position;
            if ((startString.length - 1) > position) {
                startString = startString.slice(0, position) + dest + startString.slice(position);
                console.log(startString);
            }
        } else if (array[index].includes('Remove Stop:')) {
            let newLine = array[index].replace('Remove Stop:', '');
            let [start, end] = newLine.split(':');
            start = +start;
            end = +end;
            if ((startString.length - 1) > start && (startString.length - 1) > end) {
                startString = startString.slice(0, start) + startString.slice(end + 1);
                console.log(startString);
            }
        } else if (array[index].includes('Switch:')) {
            let newLine = array[index].replace('Switch:', '');
            let [old, newString] = newLine.split(':');
            if (startString.includes(old)) {
                startString = startString.replaceAll(old, newString);
                console.log(startString);
            }
        }
        index++;
    }
    console.log(`Ready for world tour! Planned stops: ${startString}`);
}

worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);