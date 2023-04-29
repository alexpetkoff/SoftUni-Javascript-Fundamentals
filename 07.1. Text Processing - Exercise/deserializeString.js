function deserializeString(input) {
    let result = '';
    let index = 0;
    let obj = {};
    while (input[index] !== 'end') {
        let [letter, value] = input[index].split(':');
        let values = value.split('/');
        for (let key of values) {
            obj[key] = letter;
        }
        index++;
    }
    let keysSorted = Object.keys(obj);

    for (let key of keysSorted) {
        result += obj[key];
    }
    console.log(result);
}

deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);