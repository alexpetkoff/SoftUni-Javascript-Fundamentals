function phoneBook(array) {

    let phoneBookObj = {};

    for(let el of array) {
        let [name, phone] = el.split(' ');
        phoneBookObj[name] = phone;
    }

    for(let el in phoneBookObj) {
        console.log(el, '->', phoneBookObj[el]);
    }

}

phoneBook([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);