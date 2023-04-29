function sortAnArrayByTwoCriteria(array) {

let result = array.sort(function(a,b){
    if(a.length === b.length) {
        return a.localeCompare(b);
    } else {
        return a.length - b.length;
    }
});
console.log(result.join('\n'));

}

//sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
//sortAnArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);


sortAnArrayByTwoCriteria(['omen', 'Default', 'Deny', 'test']);

