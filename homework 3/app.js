let users = [
    { name: 'John', gender: 'm', title: '', hasCar: true, age: 30, eyeColor: 'green', hairColor: 'black', address: 'Skopje, MK', job: 'developer' },
    { name: 'Jack', gender: 'm', title: '', hasCar: false, age: 19, eyeColor: 'brown', hairColor: 'brown', address: 'Tetovo, MK', job: 'realtor' },
    { name: 'Elisabeth', gender: 'f', title: '', hasCar: true, age: 45, eyeColor: 'blue', hairColor: 'black', address: 'Bitola, MK', job: 'project manager' },
    { name: 'Ana', gender: 'f', title: '', hasCar: true, age: 98, eyeColor: 'brown', hairColor: 'blonde', address: 'Shtip, MK', job: 'designer' },
    { name: 'Carroll', gender: 'f', title: '', hasCar: false, age: 17, eyeColor: 'green', hairColor: 'blonde', address: 'Kumanovo, MK', job: 'bushiness analyst' }
]


// let removeUserByTheirJob = (array,job) => {
//     let index = array.findIndex(item => {
//         return item.job === job;
//     })
//     array.splice(index, 1);
// }
// removeUserByTheirJob(users, `realtor`);
// console.log(users);

// let removeUserByTheirAge = (array, age) => {
//     let index = array.findIndex(item => {
//         return item.age === age;
//     })
//     array.splice(index, 1);
// }
// removeUserByTheirAge(users, 98);
// console.log(users);

// let removeUserByTheirEyeColor = (array,color) => {
//     let index = array.findIndex(item => {
//         return item.eyeColor === color;
//     })
//     array.splice(index, 1);
// }
// removeUserByTheirEyeColor(users, `blue`);
// console.log(users);