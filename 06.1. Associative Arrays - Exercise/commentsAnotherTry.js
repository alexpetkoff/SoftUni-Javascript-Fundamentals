function comments(input) {

    let users = [];
    let articles = [];
    let objOfArticles = {};

    for (let line of input) {
        if (line.includes('user ')) {
            let username = line.replace('user ', '');
            users.push(username);
        }
        if (line.includes('article ')) {
            let article = line.replace('article ', '');
            articles.push(article);
            objOfArticles[article] = [];
        }
        if (line.includes(' posts on ')) {
            let [username, articleInfo] = line.split(' posts on ');
            let test = articleInfo.split(': ');
            let article = test.shift();
            let [title, comment] = test[0].split(', ');
            if (users.includes(username) && articles.includes(article)) {
                objOfArticles[article].push([username, title, comment]);
            }
        }
    }

    let keys = Object.keys(objOfArticles);
    let sortedKeys = keys.sort((a, b) => objOfArticles[b].length - objOfArticles[a].length)

    for (let key of sortedKeys) {
        console.log(`Comments on ${key}`);
        let values = Object.values(objOfArticles[key]);
        let sortedValues = values.sort((a, b) => a[0].localeCompare(b[0]));
        for (let [username, title, comment] of sortedValues) {
            console.log(`--- From user ${username}: ${title} - ${comment}`);
        }
    }
}

comments(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);
