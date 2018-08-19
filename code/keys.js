console.log('We made it ma dude');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

console.log('exports' + exports.spotify);
//let spotify = new Spotify(keys.spotify);
