function schoolGrades(array) {

    let students = new Map();

    for(let element of array) { 
        let arrayOfGrades = element.split(' ');
        let name = arrayOfGrades.shift(0);
        let grades = arrayOfGrades.map(Number);
        
        if(!students.has(name)) {
            students.set(name, []);
        }
        for(let grade of grades) {
            students.get(name).push(grade);
        }
    }
    
    let avgGrades = [];
    let arrayOfStudents = [];
    
    for(let [name, value] of students) {
        arrayOfStudents.push(name);
        let sum = 0;
        for(let el of value) {
            sum = sum + el;
        }
        avgGrades = (sum / value.length).toFixed(2);
        students.set(name, avgGrades);
    }
    
    arrayOfStudents.sort((a,b) => a.localeCompare(b));
    
    for(let el of arrayOfStudents) {
        console.log(`${el}: ${students.get(el)}`);
    }
    
}

schoolGrades([
'Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'
]);