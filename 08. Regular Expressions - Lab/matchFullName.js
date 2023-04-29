function matchFullName(string) {

    let regex = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
    let matches = string.match(regex);
    console.log(matches.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")