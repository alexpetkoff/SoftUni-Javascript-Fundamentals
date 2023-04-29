/*
function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    }

    for(let key of Object.keys(person)) {
        console.log(`${key}: ${person[key]}`)
    }
}

personInfo("Peter", "Pan", "20"); */


function personInfo(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }
  	return person;
}
