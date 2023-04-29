function partyTime(array) {

    let invitedVIP = [];
    let invitedRegular = [];
    
    let invited = array.splice(0, array.indexOf('PARTY'));
    let arrived = array.splice(array.indexOf('PARTY') + 1);

    for(let el of invited) {
        let firstLetter = Number(el[0]);
        if (isNaN(firstLetter)) {
            invitedRegular.push(el);
        } else {
            invitedVIP.push(el);
        }
    }

    for(let el of arrived) {
        let firstLetter = Number(el[0]);
        if (isNaN(firstLetter)) {
            invitedRegular.splice(invitedRegular.indexOf(el), 1);
        } else {
            invitedVIP.splice(invitedVIP.indexOf(el), 1);
        }
    }

    let finalResult = [];

    for(let el of invitedVIP) {
        finalResult.push(el);
    }

    for(let el of invitedRegular) {
        finalResult.push(el);
    }
    
    console.log(finalResult.length);
    console.log(finalResult.join('\n'));
}

partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]);