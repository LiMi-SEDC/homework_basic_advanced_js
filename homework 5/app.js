let users = [
    { name: 'Micheal-1', gender: 'm', title: '', hasCar: true, age: 40, eyeColor: 'blue', hairColor: null, address: 'Sofija, BG', job: 'developer' },
    { name: 'Beth-2', gender: 'f', title: '', hasCar: false, age: 35, eyeColor: 'brown', hairColor: 'blonde', address: 'Atina, GR', job: 'database engineer' },
    { name: 'Clara-3', gender: 'f', title: '', hasCar: true, age: 67, eyeColor: 'blue', hairColor: 'brown', address: 'Tirana, AL', job: 'designer' },
    { name: 'Jay-4', gender: 'm', title: '', hasCar: true, age: 39, eyeColor: 'green', hairColor: null, address: 'Dojran, MK', job: 'manager' }
]

// sorting them by their names
// function compare(a, b) {

//     let comparison = 0;

//     if (b.name > a.name) {
//         comparison = -1;
//     } else if (b.name < a.name) {
//         comparison = 1;
//     }
//     return comparison * -1;

// }
// users.sort(compare);
// console.log(users);



// sorting them by their names
// users.sort((a, b) => b.name < a.name ? - 1 : b.name > a.name ? 1 : 0);
// console.log(users);


// sorting by their age starting from the oldest
// const sortUsers = array => {
//     return array.sort((a, b) => b.age - a.age);
// }
// console.log(sortUsers(users)); 