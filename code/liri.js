require("dotenv").config();
const Spotify = require("node-spotify-api");
const Bands   = require("bandsintown-events");
const keys    = require("./keys");
const spotify = new Spotify(keys.spotify);
const bands   = new Bands(keys.bandsInTown);
const fs      = require("fs");
const request = require("request");
const searchSpotify = require("./spotify.js");
const searchOMDB    = require("./omdb.js");
const searchBands   = require("./bands.js");
const liriSays      = require("./liriSays.js");

//first CMDL argument.
let args = process.argv[2];
let searchTerm = process.argv[3];


// let liri_says = () => {
// 	fs.readFile("random.txt", "utf8", function (error, data) {
// 		if (error) console.log(`Error Thrown: ${error}`);
	
// 		let dataArr = data.split(",");
// 		console.log(dataArr[1])
// 		let cmd = dataArr[0], arg = dataArr[1];
// 		searchSpotify.spotify_getSong(cmd, arg);
		
// 	});
// }

const liri_switch = (args, searchTerm) => {

	switch (args) {
		case "spotify-this-song":
			console.log('Spotify Has Been Reached'); //test log
			searchSpotify.spotify_getSong(args, searchTerm);
			break;
		case "movie-this":
			console.log('OMDB Has Been Reached'); //test log
			searchOMDB.omdb_getMovie(args,searchTerm);
			break;
		case "concert-this":
			console.log("Bands-In-Town Has Been Reached");
			searchBands.get_concerts(args, searchTerm);
			break;
		case "do-what-it-says":
			liriSays.liri_says();
			break;
		default:
			console.log("\t\tINVALID SEARCH \nto run a search please enter these commands:");
			console.log("-> spotify-this-song :: For spotify");
			console.log("-> movie-this        :: For OMDB-Movies");
			console.log("-> concert-this      :: For Bands-In-town-Search");
			console.log("-> do-what-it-says   :: For something random");
			break;
	};
}

liri_switch(args, searchTerm);