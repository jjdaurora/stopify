// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the Musics
  app.get("/api/music", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Music.findAll({}).then(function (dbMusic) {
      // We have access to the Musics as an argument inside of the callback function
      res.json(dbMusic);
    });
  });

  app.get("/api/user", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function (dbUser) {
      // We have access to the Musics as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  app.get("/api/genre", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Genre.findAll({}).then(function (dbGenre) {
      // We have access to the Musics as an argument inside of the callback function
      res.json(dbGenre);
    });
  });

  app.get("/api/trackfeedback", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.TrackFeedback.findAll({}).then(function (dbTrackFeedback) {
      // We have access to the Musics as an argument inside of the callback function
      res.json(dbTrackFeedback);
    });
  })

  // POST route for saving a new Music
  app.post("/api/music", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Music.create( req.body
    
    ).then(function (dbMusic) {
      // We have access to the new Music as an argument inside of the callback function
      res.json(dbMusic);
    });
  });

  app.post("/api/user", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.User.create(
      req.body
  ).then(function (dbUser) {
      // We have access to the new User as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  app.post("/api/genre", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.Genre.create(
      req.body
    ).then(function (dbGenre) {
      // We have access to the new Genre as an argument inside of the callback function
      res.json(dbGenre);
    });
  });
  app.post("/api/trackfeedback", function (req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.TrackFeedback.create(
      req.body
    ).then(function (dbTrackFeedback) {
      // We have access to the new TrackFeedback as an argument inside of the callback function
      res.json(dbTrackFeedback);
    });
  });

  // PUT route for updating Musics. We can get the updated Music from req.body
  app.put("/api/musics", function (req, res) {

  });
  app.put("/api/user", function (req, res) {

  });
  app.put("/api/genre", function (req, res) {

  });
  app.put("/api/trackfeedback", function (req, res) {

  });
};
