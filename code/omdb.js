require("dotenv").config();
const request = require("request");
const fs = require("fs");
//Cause I'm lazy and log/append is easier to top.
let log = console.log;
let appends = fs.appendFile;
module.exports.omdb_getMovie = () => {
    let movie = process.argv[3];
    let omdb = `http://www.omdbapi.com/?t='${movie}'&plot=short&tomatoes=true&apikey=trilogy`;

    request(omdb, (error, response, body) => {
        //If there's no error run.
         if (!error && response.statusCode === 200) {
            let parseBody = JSON.parse(body);
            // if (movie === null){
            // log(`Invalid Movie Title - Display Default: ${parseBody.Title}`);
            // } else
            //search results to be logged out.
            log("\n ----------------OMDB Movie Results-------------------- \n");
            log(` *Movie Title:  ${parseBody.Title}`);
            log(` *Year Release: ${parseBody.Year}`);
            log(` *IMDB Rating:  ${parseBody.imdbRating}`);
            log(` *Country:  ${parseBody.Country}`);
            log(` *Language: ${parseBody.Language}`);
            log(` *Plot:   ${parseBody.Plot}`);
            log(` *Actors: ${parseBody.Actors}`);
            log(` *Rotten Tomatoes Rating: ${parseBody.tomatoRating}`);
            log(` *Rotten Tomatoes URL:    ${parseBody.tomatoURL}`);
            log(`\n ---------------------------------------------------- \n`)
          //  appding to log.txt
            // fs.appendFile('log.txt', "----------------OMDB Movie Results--------------------");
            // fs.appendFile('log.txt', ` *Movie Title:  ${parseBody.Title}`);
            // fs.appendFile('log.txt', ` *Year Release: ${parseBody.Year}` );
            // fs.appendFile('log.txt', ` *IMDB Rating:  ${parseBody.imdbRating}` );
            // fs.appendFile('log.txt', ` *Country:  ${parseBody.Country}`);
            // fs.appendFile('log.txt', ` *Language: ${parseBody.Language}`);
            // fs.appendFile('log.txt', ` *Plot:   ${parseBody.Plot}`);
            // fs.appendFile('log.txt', ` *Actors: ${parseBody.Actors}`);
            // fs.appendFile('log.txt', ` *Rotten Tomatoes Rating: ${parseBody.tomatoRating}` );
            // fs.appendFile('log.txt', ` *Rotten Tomatoes URL:    ${parseBody.tomatoURL}`);
            // fs.appendFile('log.txt', `\n ---------------------------------------------------- \n`);
        } else {
            //if there is an error -> log error
            log(`Thrown Error: ${error}`);
        }
    });
}