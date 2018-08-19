require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");

const spotify = new Spotify(keys.spotify);

let fs = require("fs");
let request = require("request");



module.exports.spotify_song = () => {
    let title = process.argv[3];
    console.log(title);

    if (!title) {
        title = "I like Big Butts";
    } else {
        title = process.argv[3];
    }
    spotify.search({
            type: 'track',
            query: title
        },(error, data) => {
            if (!error) {
                let results = data.tracks.items[0];
                console.log('Spotifies Song Results \n |---------------------|');
                console.log('|' + `Song Name: ${results.name}` + '|');
                // console.log('|' + `Artist name:  ${resutls.album.artists[0].name}` + '|');
                // console.log('|' + `Preview Url: ${results.preview_url}` + '|');
                // console.log(`Album Name: ${results.album.name}`);
                // console.log(`---------------------------------`);
            } else {
                console.log('Error Reached:' + error);
            }
        })
}