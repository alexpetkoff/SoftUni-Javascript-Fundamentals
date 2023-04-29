function bookShelf(input) {

    let shelves = {};

    for(let line of input) {
        if(line.includes(' -> ')) {
            let [id, genre] = line.split(' -> ');
            if(!shelves.hasOwnProperty([id])) {
                shelves[id] = {};
                shelves[id][genre] = [];
            }
        } else { 
            let toSplit = line.split(': ');
            let title = toSplit.shift();
            let [author, genre] = toSplit[0].split(', ');

            for(let x in shelves) {
                for(let y in shelves[x]) {
                    if(shelves[x].hasOwnProperty(genre)){
                        shelves[x][y].push([title, author]);
                    }
                }
            }
        }
    }
    let arrayOfBooks = []
    for(let id in shelves) {
        for(let genre in shelves[id]) {
            let sortedBooks = Object.values(shelves[id][genre]);
            let booksCount = shelves[id][genre].length;
            sortedBooks.sort((a,b) => a[0].localeCompare(b[0]));
            arrayOfBooks.push([id,genre,booksCount,sortedBooks]);
        }
    }
    arrayOfBooks.sort((a,b) => b[2] - a[2]);

    for(let element of arrayOfBooks) {
        console.log(`${element[0]} ${element[1]}: ${element[2]}`);
        for(let books of element[3]) {
            console.log(`--> ${books[0]}: ${books[1]}`);
        }
    }
}


bookShelf(
    ['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Name of Earth: Jo Bell, sci-fi','Losing Dreams: Gail Starr, sci-fi' ,'Pilots of Stone: Brook Jay, history']);