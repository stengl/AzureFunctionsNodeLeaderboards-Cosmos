'use strict';
module.exports = function (app) {
  const score = require('../controllers/gameDataController');

  // todoList Routes
  app.route('/api/scores')
    .post(score.createScore);

  app.route('/api/scores/top/:count')
     .get(score.listTopScores);

  app.route('/api/scores/:scoreId')
     .get(score.getScore);

   app.route('/api/users/:userId')
     .get(score.getUser);

  app.route('/api/user/scores')
    .get(score.listAllScoresForCurrentUser);

};