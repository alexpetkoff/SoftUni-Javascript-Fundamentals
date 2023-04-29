function comments(input) {

    let listOfUsers = {};
    let listOfArticles = {};

    for(let line of input) {
        if (line.includes('user')) { 
            let user = line.replace('user ', '');
            listOfUsers[user] = undefined;
        }
        if (line.includes('article')) {
            let article = line.replace('article ', '');
            listOfArticles[article] = {};
        }
        if (line.includes('posts on')) {
            let [user,articleInfo] = line.split(' posts on ');
            let test = articleInfo.split(': ');
            let article = test.shift();
            let [title, content] = test[0].split(', ');
            if(listOfUsers.hasOwnProperty(user) && listOfArticles.hasOwnProperty(article)) {
                listOfArticles[article][user] = {};
                listOfArticles[article][user][title] = content;
            }
        }
    }
    let array = [];

    for(let key in listOfArticles) {
        let tempArr = [];
        for(let el of Object.entries(listOfArticles[key])) {
            tempArr.push(el)
        }
        array.push([key, tempArr])
    }
    let sorted = array.sort((a, b) => b[1].length - a[1].length)
    
    for(let element of sorted) {
        console.log(`Comments on ${element[0]}`);
        let arrayOfComments = Object.entries(listOfArticles[element[0]]);
        let sortedArrayOfComments = arrayOfComments.sort((a, b) => a[0].localeCompare(b[0]));
        for(let el of sortedArrayOfComments){
            let comments = Object.entries(listOfArticles[element[0]][el[0]]);
            console.log(`--- From user ${el[0]}: ${comments[0][0]} - ${comments[0][1]}`);
        }
    }
}   
comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']
);