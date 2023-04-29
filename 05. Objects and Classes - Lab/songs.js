function songs(array) {

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
            this.name = name,
            this.time = time
        }
    }

    let songsCount = array.shift();
    let typeToPrint = array.pop();

    for (let element of array) {
        let [typeList, name, time] = element.split("_");
        let currentSong = new Song(typeList, name, time);

        if (typeToPrint === "all") {
            console.log(currentSong.name);
        } else if (typeToPrint === currentSong.typeList) {
            console.log(currentSong.name);
        }
    }

}

songs(
    [4,
        'favourite_DownTown_3:14',
        'listenLater_Andalouse_3:24',
        'favourite_In To The Night_3:58',
        'favourite_Live It Up_3:48',
        'listenLater']);