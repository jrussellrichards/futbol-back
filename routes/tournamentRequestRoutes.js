var tournamentController = require('../controllers/tournamentRequestController');

module.exports = function (app) {

  app.route('/tournament/:tournamentId')
    .get(tournamentController.getTournament)
    .delete(tournamentController.deleteTournament)
  // .delete(tournamentController.deleteTournament);
  app.route('/tournament/')
    .get(tournamentController.getTournaments)

  app.route('/')
    .get(tournamentController.getTournaments)

};
