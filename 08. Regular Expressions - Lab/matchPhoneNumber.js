function matchPhoneNumber(array) {
    let text = array[0];
    let regex = /\+359([ | -])2\1\d{3}\1\d{4}\b/g;
    let results = text.match(regex);
    console.log(results.join(', '));
}

matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);