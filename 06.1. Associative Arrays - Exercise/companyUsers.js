function companyUsers(input) {

    let companies = new Map();

    for (let str of input) {
        let [company, employee] = str.split(' -> ');

        if(!companies.has(company)) {
            companies.set(company,[employee]);
        } else {
            let newSet = new Set(companies.get(company));
            newSet.add(employee);

            let array = Array.from(newSet);
            companies.set(company,array);
        }
    }
    
    let keys = Array.from(companies.keys()).sort((a,b) => a.localeCompare(b));
    
    for (let element of keys) {
        console.log(element);
        for(let employer of companies.get(element)) {
            console.log(`-- ${employer}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]);