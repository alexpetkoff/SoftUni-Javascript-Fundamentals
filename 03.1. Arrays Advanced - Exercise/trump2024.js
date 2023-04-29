function buildAWall(array) { 

    let crews = array.length;
    let cubicsPerDay = [];
    
    let sortedArray = array.sort((a,b) => a - b);
    for(let x = sortedArray[0]; x < 30; x++) {
        cubicsPerDay.push(0);
    }

    for(let i = 0; i < crews; i++) {
        let index = 0;
        for(let y = array[i]; y < 30; y++) {
        cubicsPerDay.splice(index, 1,  195 + cubicsPerDay[index]);
        index++;
        }
    }

    let totalPesos = 0;
    for(let el of cubicsPerDay) {
        totalPesos += el;
    }
    console.log(cubicsPerDay.join(', '));
    console.log(totalPesos * 1900 + ' pesos')
}
buildAWall([21, 25, 28]);
buildAWall([17]);