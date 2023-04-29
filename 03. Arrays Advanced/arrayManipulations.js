function arrayManipulations(array) {

    let stringArray = array.shift();
    let manipulatedArray = stringArray.split(" ");
    
    for(let el of array) {
        let manipulatedElement = el.split(" ");
        if(manipulatedElement[0] === "Add") {
            let num = manipulatedElement[1];
            manipulatedArray.push(num);
        } else if(manipulatedElement[0] === "Remove") {
            let newArray = manipulatedArray.filter(x => x !== manipulatedElement[1]);
            manipulatedArray = newArray;
        } else if(manipulatedElement[0] === "RemoveAt") {
            let newArray = manipulatedArray.filter((x,i) => i != manipulatedElement[1]);
            manipulatedArray = newArray;
        } else if(manipulatedElement[0] === "Insert"){
            let number = manipulatedElement[1];
            let index = manipulatedElement[2];
            manipulatedArray.splice(index, 0, number);
        }
    }
    console.log(manipulatedArray.join(" "));
}

arrayManipulations(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']);