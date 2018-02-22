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
            // need to limit get request to 1 track
            self.request.get('me/top/tracks', {}, (err, response, body) => {
                if (err) {
                    return reject(err);
                }                
               self.saveDatatoDb(body.items);

               resolve(body.items);
            
            });
        });
    },

    getArtistGenre: function(artistId) {
        var self = this;
        return new Promise((resolve, reject) => {
            self.request.get('artists/' + artistId, {}, (err, response, body) => {
                if (err) {
                    return reject(err);
                }
                
                resolve(body.genres);
            });
        });
    },

    saveDatatoDb: function(tracks) {
        var artistsStr = "";
        var self = this;
        var track = tracks[0];

        for (var i = track.artists.length - 1; i >=0; i--) {
            artistsStr += ', ' + track.artists[i].name;
        }
        console.log('artistsStr' , artistsStr);

        self.getArtistGenre(track.artists[0].id)
            .then(function(genreResponse) {
                console.log('genreResponse: ', genreResponse);
                db.Music.findOrCreate({
                    where: {
                        spotifyTrackId: track.id
                    },
                    defaults: {
                        trackGenre: JSON.stringify(genreResponse),
                        trackArtwork: track.album.images[0].url,
                        spotifyTrackID: track.id,
                        trackName: track.name,
                        trackArtist: artistsStr,
                        trackPopularity: track.popularity
                    }
                })

            });
        }
    }

module.exports = SpotifyClient;

