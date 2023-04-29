function meetings(array) {

    let meetingsSchedule = {};

    for (let el of array) {

        let [day, name] = el.split(' ');

        if (meetingsSchedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            meetingsSchedule[day] = name;
        }
    }

    for (let el in meetingsSchedule) {
        console.log(`${el} -> ${meetingsSchedule[el]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);