// const EventEmitter = require('events'); //super class


// class Emitter extends EventEmitter {
//     greet(name) {
//         this.emit('greet', name)
//     }
// } // emittar

// //instans skapas av klassen

// const myEmitter = new Emitter()



//skapar nya så kan skriva vad som helst
// myEmitter.on('hej', () => console.log('Eventet hej kördes'));
// myEmitter.on('då', () => { 
//     console.log('Eventet då kördes');
// });

// //för att köra eventet

// myEmitter.emit('hej');
// myEmitter.emit('hej');
// myEmitter.emit('då');


// myEmitter.on('greet', data => {
//     console.log('Hej ' + data)
// }) // om det är ett evetn som heter greet vill jag göra det här
// //vill jag köra ett event så emittar jag den då får jag ut den här texten

// myEmitter.greet('Sofia');
// myEmitter.greet('Luke');
// myEmitter.greet('Amity');
