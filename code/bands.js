require("dotenv").config();
const request = require("request");
const fs = require("fs");

let log = console.log;

module.exports.get_concerts = () => {
    let artist = process.argv[3];

    let bandsInTown = `https://rest.bandsintown.com/artists/${artist}/events?app_id=codingbootcamp`

    request(bandsInTown, (error, response, body) => {
        console.log('WE LIT');
    });
}