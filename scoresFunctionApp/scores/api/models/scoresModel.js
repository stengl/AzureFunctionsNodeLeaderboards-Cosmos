'use strict';

const moment = require('moment');
const Schema = require('mongoose').Schema;
const Base = require('./baseModel');

const ScoreSchema = new Schema({
  createdAt: {
    type: Date,
    default: moment.utc()
  },
  value: {
    type: Number,
    required: 'Enter score value'
  },
  userId: {
    type: String,
    required: 'Enter userId'
  },
  userName: {
    type: String,
    required: 'Enter userName'
  },
  description: {
    type: String
  }
});

module.exports = Base.discriminator('Scores', ScoreSchema);