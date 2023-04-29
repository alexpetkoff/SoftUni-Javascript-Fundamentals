function destinationMapper(input) {

    let pattern = /([\=]|[\/])[A-Z][A-Za-z]{2,}\1/g;
    let travelPoints = 0;
    let finalResult = [];

    if(!input.match(pattern)) {
        console.log(`Destinations: ${finalResult.join(', ')}`);
        console.log(`Travel Points: ${travelPoints}`);
    } else {
        let newInput = input.match(pattern);
        for(let el of newInput) {
            let destination = el.slice(1,el.length - 1);
            travelPoints += Number(destination.length);
            finalResult.push(destination);
        }
    
        console.log(`Destinations: ${finalResult.join(', ')}`);
        console.log(`Travel Points: ${travelPoints}`);
    }
}

destinationMapper("ThisIs some InvalidInput");