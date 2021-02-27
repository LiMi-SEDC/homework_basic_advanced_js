let users = [
    { name: 'John', gender: 'm', title: '', hasCar: true, age: 30, eyeColor: 'green', hairColor: 'black', address: 'Skopje, MK', job: 'developer' },
    { name: 'Jack', gender: 'm', title: '', hasCar: false, age: 19, eyeColor: 'brown', hairColor: 'brown', address: 'Tetovo, MK', job: 'realtor' },
    { name: 'Elisabeth', gender: 'f', title: '', hasCar: true, age: 45, eyeColor: 'blue', hairColor: 'black', address: 'Bitola, MK', job: 'project manager' },
    { name: 'Ana', gender: 'f', title: '', hasCar: true, age: 98, eyeColor: 'brown', hairColor: 'blonde', address: 'Shtip, MK', job: 'designer' },
    { name: 'Carroll', gender: 'f', title: '', hasCar: false, age: 17, eyeColor: 'green', hairColor: 'blonde', address: 'Kumanovo, MK', job: 'bushiness analyst' }
]





const editUser = (array,name) => {
    let findUser = array.find(user => {
        return user.name = name;
    })
    return findUser;
}
editUser(users, `Limi`);
console.log(users);


// const editUser = (array, name) => {
//     let mapUser = array.map(user => {
//         return user.name = name;
//     });
//     return mapUser;
// }
// editUser(users,`Limi`);
// console.log(users);




