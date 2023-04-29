function distinctArray(array) {

    let newArr = [];
    
    for(let el of array) {
        if(!newArr.includes(el)) {
            newArr.push(el);
        }
    }
    console.log(newArr.join(' '));
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2, 2, 2, 2]); 
