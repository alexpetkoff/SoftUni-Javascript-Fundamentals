function houseParty(list) {

    let guests = [];
    
    for(let x of list) {
        let temp = x.split(' ');
        if(temp.includes('not')) {
            if(guests.includes(temp[0])) {
                let index = guests.indexOf(temp[0]);
                guests.splice(index, 1);
            } else {
                console.log(`${temp[0]} is not in the list!`);
            }
        } else {
            if(guests.includes(temp[0])) {
                console.log(`${temp[0]} is already in the list!`);
            } else {
                guests.push(temp[0]);
            }
        }
    }
    console.log(guests.join('\n'));

}

houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);