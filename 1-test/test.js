const hello = () => {
    console.log('Hello World')
}

// hello();

//globala objektet
// console.log(window); går inte i nodejs
// console.log(global);

//behöver inte skriva global, det gobala objektet är alltid där
// global.setTimeout(() => {
//     console.log('hej')
//     clearInterval(int);
// }, 5000);

// let count = 0
// const int = setInterval(() => {
//     count ++
//     console.log(count);
// },1000)

// console.log(_dirname); // doesnt work for me
// console.log(_filename);
