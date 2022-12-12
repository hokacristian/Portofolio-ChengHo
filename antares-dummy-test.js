const antares = require('antares-http');

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

setInterval(() => {
    data = {
        temperature: randomNumber(25, 30),
        humidity: randomNumber(80, 90),
    }
    antares.setAccessKey('664904e50c041393:39f9b77b24cfb7b1');
    antares.send(data, 'modul3cps', 'modul3cps')
        .then((response) => {
            console.log(response);
        })
}, 3000);