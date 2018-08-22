require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");
const moment = require('moment');
const searchSpotify = require("./spotify.js");

let liri_says = () => {
	fs.readFile("random.txt", "utf8", function (error, data) {

		if (error) console.log(`Error Thrown: ${error}`);
	
		let dataArr = data.split(",");
		console.log(dataArr[1])
        let cmd = dataArr[0], arg = dataArr[1];
        
		searchSpotify.spotify_getSong(cmd, arg);
	});
}

module.exports.liri_says = liri_says;
//liri_says(args, searchTerm);
