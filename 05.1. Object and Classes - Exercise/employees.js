function employees(array) {

    class Employees {
        constructor(name, number) {
            this.name = name,
                this.number = number
        }
    }

    for (let el of array) {
        let name = el;
        let number = el.length;
        let newObj = new Employees(name, number);

        console.log(`Name: ${newObj.name} -- Personal Number: ${newObj.number}`);
    }
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);