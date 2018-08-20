require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");
const moment = require('moment');
let log = console.log;


module.exports.spotify_getSong = () => {
    let title = process.argv[3];
    log('\n You just searched: ' + title);

    if (!title) {
        title = "505";
    } else {
        title = process.argv[3];
    }
    spotify.search({
        type: 'track',
        query: title
    }, (error, data) => {
        if (!error) {
            let results = data.tracks.items[0];
            log(' Spotifies Song Results \n--------------------------------');
            log(` Song Name: ${results.name}`);
            log(` Artist name:  ${results.album.artists[0].name}`);
            log(` Album Name: ${results.album.name}`);

            if (results.preview_url === null) {
                log(' No Preview Link Found :(');
            } else {
                log(` Preview Url: ${results.preview_url}`);
            }
            log(`---------------------------------`);

            //appends files to log.txt
            fs.appendFile('log.txt', results.name);
            fs.appendFile('log.txt', results.album.artists[0].name);
            fs.appendFile('log.txt', results.album.name);
            fs.appendFile('log.txt', results.preview_URL)
            fs.appendFile('log.txt', "---------------------------------");
        } else {
            log('Error Reached: ' + error);
        }

    })
}