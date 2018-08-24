require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");
const moment = require('moment');
const figlet = require('figlet');
let log = console.log;

spotify_getSong = (args, title) => {
    //let title = process.argv[3];
    if (title == null){
        log('\n No search parameter found - searching default');
    } else {
        log('\n You just searched: ' + title);   
    }
    

    if (!title) {
        title = "505";
    } else {
        title
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
            fs.appendFile('log.txt', (`${results.name} \r\n ${results.album.artists[0].name} \r\n ${results.album.name} \r\n ${results.preview_URL} \r\n ---------------------------------`), (err) => {
                if (err) {
                    throw err;
                }
            });

        } else {
            log('Error Reached: ' + error);
        }
    })
}

module.exports.spotify_getSong = spotify_getSong;