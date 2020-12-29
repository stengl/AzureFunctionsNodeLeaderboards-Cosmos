'use strict';
module.exports = function (app) {
  const leaderboardsAPI = require('../controllers/leaderboardsController');

  app.route('/api/scores')
        .post(leaderboardsAPI.createScore);

    app.route('/api/scores/all')
        .get(leaderboardsAPI.listAllScores);


};