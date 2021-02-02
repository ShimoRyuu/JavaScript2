// const user = {
//     firstName: 'Sofia',
//     lastName: 'Mc Iver',
//     age: 25,
//     email: 'mr.toastie@mail.com'
// }

// console.log(user);

// module.exports = user; //exporterar den så man kommer direkt till den, lagras, så den också skrivs ut på console log på andra


class User {
    constructor(firstName, lastName, age, email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    greet() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`)
    }//funktion

}
module.exports = User;
