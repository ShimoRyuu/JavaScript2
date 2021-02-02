// import hej from './user' //kräver en konfig, funkar inte som vi vill

const hej = require('./user');
// const arrays = require('./module');
const {names, ages} = require('./module'); //ser snyggare ut men måste se till att allt står rätt

// console.log(hej); //får inte instant access till den

const User = require('./user');

const user1 = new User('Sofia', 'Mc Iver', 25, 'sofia@mail.com')
//tar in den så den kan användas
// user1.greet();

console.log() //names, bara namn. age, bara ålder. array, allt.

