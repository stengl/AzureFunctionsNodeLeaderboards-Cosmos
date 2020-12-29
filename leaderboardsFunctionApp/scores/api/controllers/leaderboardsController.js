'use strict';
const mongoose = require('mongoose');
const Score = mongoose.model('Scores');
const User = mongoose.model('Users');
const moment = require('moment');
const utilities = require('../../utilities');
const config = require('../../config');
const controllerHelpers = require('./controllerHelpers');


//https://**functionURL**/api/scores
//creates a new score. If the user that got the score doesn't exist (new user), he/she is created, too
function createScore(req, res) {
    utilities.logInfo("createScore", req);



    //validate createdAt, if exists
    if (req.body.createdAt) {
        const date = moment(req.body.createdAt);
        if (!date.isValid()) {
            controllerHelpers.respond('createdAt must be an valid date', '', req, res, 400);
            return;
        }
    }

    utilities.logInfo("saving now", req);
    const newScore = new Score({
        value: String(req.body.value),
        description: req.body.description,
        createdAt: moment(req.body.createdAt) || moment.utc()
    });
    newScore.save(function (err, score) {
        if (err) {
            controllerHelpers.respond('Error in creating new score: ' + err, null, req, res);
        }
        else {
            utilities.logInfo("saved");
        }
    });
    //saveScore(req, res);
};


//helper function to save the score in the database
function saveScore(req, res) {
    utilities.logInfo("in saveScore function");
    
    const newScore = new Score({
        value: String(req.body.value),
        description: req.body.description,
        createdAt: moment(req.body.createdAt) || moment.utc()
    });
    newScore.save(function (err, score) {
        if (err) {
            controllerHelpers.respond('Error in creating new score: ' + err, null, req, res);
        }
        else {
            utilities.logInfo("saved");
        }
    });
    
   
    
}


module.exports = {
    createScore
}