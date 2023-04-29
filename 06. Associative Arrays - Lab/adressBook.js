function adressBook(array) {

    let adressBookObject = {};

    for(let el of array) {
        let [name, address] = el.split(':');
        adressBookObject[name] = address;
    }
    
    let arrayOfKeys = Object.keys(adressBookObject);
    let sortedArrayOfKeys = arrayOfKeys.sort((a,b) => a.localeCompare(b));
    
    for(let element of sortedArrayOfKeys) {
        console.log(`${element} -> ${adressBookObject[element]}`);
    }
    
}

adressBook([
'Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'
]);