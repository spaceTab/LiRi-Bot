require("dotenv").config();
const keys = require("./keys");
const request = require("request");
const Bands = require("bandsintown-events");
const bands = new Bands(keys.bandsInTown);
const moment = require("moment");
const DATE_FORMAT = 'YYYY-MM-DD';
const fs = require("fs");

let log = console.log;

get_concerts = () => {
    let artist = process.argv[3];
    //I want to thank ma dude Viktor for letting me use his API key whilst I wait for their email -> day 5
    let bandsURL = `https://rest.bandsintown.com/artists/${artist}/events?app_id=${bands}`;

    request(bandsURL, (error, response, events) => {
        if (error && response.statusCode === 200) {
            log(`Thrown Error: ${error}`);
        } else {
            //setting a default option
            if (artist) {
                artist = artist;
            } else {
                artist = "wu tang clan";
            }

            //overloads JSON.stringify
            let stringEvents = JSON.stringify(events, null, " ");
            let parseEvents  = JSON.parse(stringEvents);    //parses strinified data
            let eventData    = JSON.parse(parseEvents);     //parses the parsed data
            //log(eventData);

            //loops through all the venues outputting each
            let eventLen = eventData.length;
            for (let i = 0; i < eventLen; i++) {
                log("|-----------------" + artist.toUpperCase() + "-----------------|");
                log('\t\t' + eventData[i].venue.name);
                log('\t\t' + eventData[i].venue.city + " - " + eventData[i].venue.region);
                log('\t\t' + moment(eventData[i].datetime).format(DATE_FORMAT));
                log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
                log('\n');
            }
        }
    });
}

module.exports.get_concerts = get_concerts;