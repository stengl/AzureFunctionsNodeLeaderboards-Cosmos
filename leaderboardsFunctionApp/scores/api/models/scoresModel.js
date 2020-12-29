'use strict';

const moment = require('moment');
const Schema = require('mongoose').Schema;
const Base = require('./baseModel');
const utilities = require('../../utilities');

const ScoreSchema = new Schema({
  value: {
    type: String,
    required: 'Enter score value'
  },
  createdAt: {
    type: Date,
    default: moment.utc() 
    //we are not using ObjectId.getTimeStamp() to get 
    //details about score timestamp because we need to bear in mind that some of the 
    //incoming scores maybe will have been stored offline, so their creation time in our DB will
    //be different from the creation time in the client that accesses our score API
  },
  description: { //optional score related description
    type: String
  }
});

ScoreSchema.pre('save', function (next) {
    utilities.logInfo('pre score save info');
    return next();
});

ScoreSchema.post('save', function (next) {
    utilities.logInfo('post score save info');
    return next();
});

module.exports = Base.discriminator('Scores', ScoreSchema);