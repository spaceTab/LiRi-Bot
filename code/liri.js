require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");
const searchSpotify = require("./spotify.js");

const searchOMDB = require("./omdb.js");

//first CMDL argument.
let args = process.argv[2];

// let liri_says = () => {
// 	fs.readFile('random.txt', "utf8", (error, data) =>{
// 		let randomText = data.split(',');
// 		searchSpotify.spotify_getSong(randomText[1]);
// 	})
// }

switch(args){
	case "spotify-this-song":
		console.log('Spotify Has Been Reached'); //test log
		searchSpotify.spotify_getSong();
	break; 
	case "this-movie":
		console.log('OMDB Has Been Reached'); //test log
		searchOMDB.omdb_getMovie();
	break;

	case "do-what-it-says":
		liri_says();
	break;
	default:
		console.log("\t   INVALID SEARCH \nto run a search please enter these commands:");
		console.log("-> spotify-this-song :: For spotify");
		console.log("-> this-movie        :: For OMDB-Movies");
		console.log("-> this-band         :: for Bands-In-town-Search");
		console.log("-> do-what-it-says   :: for something random");
	break;
};


