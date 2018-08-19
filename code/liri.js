require("dotenv").config();
const Spotify = require("node-spotify-api");
const keys = require("./keys");
const spotify = new Spotify(keys.spotify);
const fs = require("fs");
const request = require("request");

let searchSpotify = require("./spotify.js");

//first CMDL argument.
let args = process.argv[2];


switch(args){
	case "Spotify-this-song":
		console.log('Full-Send');
		searchSpotify.spotify_getSong();
	break; 
};
