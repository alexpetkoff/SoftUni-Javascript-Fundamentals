function convertToObject(convertString) {

    let stringToObject = JSON.parse(convertString);

    for (let key of Object.keys(stringToObject)) {
        console.log(`${key}: ${stringToObject[key]}`);
    }

}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');