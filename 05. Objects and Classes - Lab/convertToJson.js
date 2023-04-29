function convertToJson(name, lastName, hairColor) {

    let person = {
        name,
        lastName,
        hairColor
    };

    let convertedToString = JSON.stringify(person);
    console.log(convertedToString);

}

convertToJson('George', 'Jones', 'Brown');