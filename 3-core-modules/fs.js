//fs står för file system

const fs = require('fs');

//VILL LÄSA FILER

// fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//  if(err)
//  console.log(err)

//  console.log(data)
// //  console.log(data.toString)
// })  //tar lite tid. nu liten fil, men den måste hämta, läsa osv. vad vill vi ska hända i denna callback funtion
// //buffer är ett paket. vill vi få den, .toString

// //async även om det tar tid så blockerar den inte resten av vår kod.

// console.log('Det här ligger efter') // tar ingen tid på sig så den kommer före


// fs.readFileSync  //finns i syncrona, stannar upp med koden och väntar tills delen är färdig och sedan köra. 
//vi kommer inte hålla på med detta men alternativen finns om man vill.



//SKRIVA FILER
// //skrier till fil
// fs.writeFile('.mapp/text.txt', 'Ny text.', () => {
//     console.log('Ändrade på texen');
// }) //andra argumentet som vi vill skriva in. 3de är en callback funtion där vi kan göra saker

// //lägger till i en fil
// fs.appendFile('./mapp/text.txt', ' Det här är text som vi har lagt till', () => {
//     console.log('la till text');
// })

//skriva till en ny fil

// fs.writeFile('./mapp/text3.txt', 'En ny fil.', () => {
//     console.log('skrev till filen');
// })

//i'm gettin problems with these things, they're not working. kommenterade bort const require


// DÖPA OM EN FIL

// fs.rename('./mapp/text3.txt', './mapp/text2.txt', err => {
//     if(err)
//     console.log(err)

//     console.log('Bytte namn på filen')
// })

//MAPPAR
//make directory, remove directory
// if(!fs.existsSync('./NyMapp')) { //omdet inte finns en ny mapp gör vi denna funktion
//     fs.mkdir('./NyMapp', err => {
//         if(err)
//         console.log(err)
//         console.log('mapp skapad')
//     }) 

// } else {
//     fs.rmdir('./NyMapp', err => {
//         if(err)
//         console.log(err);

//         console.log('Mappen fanns redan så jag tar bort den..')
//     })
// }

//gjort en if sats, om den inte finns, skapa mapp, logga ut eventuella error, eller om det finns en så tar den bort den.
 


// fs.mkdir('./NyMapp', err => {
    //     if(err)
    //     console.log(err)
    //     console.log('mapp skapad')
    // }) 


    //no clue what to use them for but bloody fun to play with XD


    // TA BORT FILER

    // if(fs.existsSync('./mapp/text2.txt')) {

    //     fs.unlink('./mapp/text2.txt', err => {
    //         if (err)
    //         console.log(err);

    //         console.log('Tar bort filen...');
    //     })
    // }
    //unlink tar bort en fil.


    const path = require('path');
    // console.log(__dirname);
    // kommer ha nytta av senare. kommer kräva den absoluta sökvägen. kommer alltid vara den abosluta vägen vare sig den ligger. START.
    // fs.appendFile(path.join(__dirname, 'mapp', 'text.txt'),  ' Nu lägger vi til text.... igen...', () => {
    //     console.log('la till text... igen..')
    // })
    //går in i direkta sökväge. absoluta sökvägen från root servern från vår datorn.



// LÄSA ELLER SKRIVA STORA FILER / STREAMS /buffer, skickar bitar av data för att användas som t.ex netflix/ (jätte stora paket, video, text etc tar lång tid att ladda ner) vill inte att en användare ska behöva vänta.
//skickar mindre bitar av paketet så vi kan börja använda dem innan hela filen läst in

// const readStream = fs.createReadStream('./mapp/stor.txt');
const readStream = fs.createReadStream(path.join(__dirname, 'mapp', 'stor.txt'), { encoding: 'utf8'});
const writeStream = fs.createWriteStream(path.join(__dirname, 'mapp', 'stor2.txt')); //varje gång jag får data på stream kommer den att skriva in

// readStream.on('data', buffer => {
//     // console.log('------------------------------------------------- NY DATA ----------------------------------------------');
//     // console.log(buffer);
//     // console.log(buffer.toString);
//     writeStream.write('\n --------------------------------------------------------- NY DATA --------------------------------------- \n'); //här väljer man vad som ska skrivas in
//     writeStream.write(buffer);
//     console.log('skrev en blit till filen');

// }) //motsvarande event listener on() encoding you don't need (buffer.toString())

//samma sak som att göra en pipe

// readStream.pipe(writeStream); // om jag bara vill skriva över använd detta, men kan inte göra flera saker





