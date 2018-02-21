var request = require('request');
var db = require('./models');

var spotifyRequest = request.defaults({
    baseUrl: 'https://api.spotify.com/v1',
    json: true
});

var SpotifyClient = function(options) {
    this.options = options;
    this.request = spotifyRequest.defaults({
        auth: {
            bearer: options.accessToken
        }
    });
}

SpotifyClient.prototype = {
    getTopTracks: function() {
        var self = this;
        return new Promise((resolve, reject) => {
            self.request.get('me/top/tracks/tracks?limit=1', {}, (err, response, body) => {
                if (err) {
                    return reject(err);
                }

                resolve(body);

                // db.User.findOrCreate({
                //     where: {
                //         spotifyTrackId: id
                //     },
                //     defaults: {
                //         spotifyTrackID: id,
                //         trackName: name,
                //         trackArtists: artists, 
                //         trackPopularity: popularity                   
                //     }
                // })
              
            });
        });
    }
}

module.exports = SpotifyClient;

