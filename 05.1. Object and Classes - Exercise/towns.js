function towns(array) {

    for (let el of array) {

        let [town, latitude, longitude] = el.split(" | ");
        let myObj = {};
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        myObj.town = town;
        myObj.latitude = latitude;
        myObj.longitude = longitude;

        console.log(myObj);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']);