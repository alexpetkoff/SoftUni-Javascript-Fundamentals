function serializeString(input) {
    let string = input[0];
    let obj = {};
    for(let index in string) {
        if (!obj.hasOwnProperty(string[index])) {
            obj[string[index]] = [];
            obj[string[index]].push(index);
        } else {
            obj[string[index]].push(index);
        }
    }
    
    let arrayKeys = Object.keys(obj);

    for(let key of arrayKeys) {
        console.log(`${key}:${obj[key].join('/')}`)
    }
}

serializeString(["avjavamsdmcalsdm"])