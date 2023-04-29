function garage(input) {

    let garages = {};

    for (let element of input) {
        let [garage, features] = element.split(' - ');
        let featuresSeparated = features.split(', ');

        if (!garages.hasOwnProperty(garage)) {
            garages[garage] = [];
            let tempObj = {};
            for (let element of featuresSeparated) {
                let [key, value] = element.split(': ');
                tempObj[key] = value;
            }
            garages[garage].push(tempObj);
        } else {
            let tempObj = {};
            for (let element of featuresSeparated) {
                let [key, value] = element.split(': ');
                tempObj[key] = value;
            }
            garages[garage].push(tempObj);
        }
    }
    for (let number in garages) {
        console.log(`Garage № ${number}`);
        for (let elements of garages[number]) {
            let array = []
            for (let key in elements) {
                array.push(`${key} - ${elements[key]}`)
            }
            console.log(`--- ${array.join(', ')}`);
        }
    }

}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);