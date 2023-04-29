function softuni(input) {

    let courses = {};
    let coursesCap = {};

    for (let line of input) {
        if (line.includes(':')) {
            let [course, capacity] = line.split(': ');
            capacity = +capacity;
            if (!courses.hasOwnProperty(course)) {
                courses[course] = [];
                coursesCap[course] = capacity;
            } else {
                coursesCap[course] += capacity;
            }
        }
        if (line.includes('with email')) {
            let lineR = line.replace('with email ', '').replace('joins ', '');
            let [userR, email, course] = lineR.split(' ');
            let [user, creditsR] = userR.split('[');
            let credits = Number(creditsR.replace(']', ''));
            if (courses.hasOwnProperty(course) && coursesCap[course] > 0) {
                courses[course].push([credits, user, email]);
                coursesCap[course] = coursesCap[course] - 1;
            }
        }
    }
    let keysOfCourses = Object.keys(courses);
    let sortedKeysCourses = keysOfCourses.sort((a, b) => courses[b].length - courses[a].length);

    for (let key of sortedKeysCourses) {
        console.log(`${key}: ${coursesCap[key]} places left`);
        let arrayOfStudents = Object.values(courses[key]);
        arrayOfStudents.sort((a, b) => b[0] - a[0]);
        for (let [credits, user, email] of arrayOfStudents) {
            console.log(`--- ${credits}: ${user}, ${email}`);
        }
    }
}

softuni(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);