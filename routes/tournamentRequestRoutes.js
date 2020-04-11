var tournamentController = require("../controllers/tournamentRequestController");
var usersController = require("../controllers/usersRequestController");
var middleware = require("./middleware/auth.js");

module.exports = function (app) {
  app.route("/CreateUser").post(usersController.createUser);
  app.route("/login").post(usersController.login);
  app.use(middleware.checkToken)
  app.route("/users").get(usersController.getUsers);
  app
    .route("/tournament/:tournamentId")
    .get(tournamentController.getTournament)
    .delete(tournamentController.deleteTournament);
  // .delete(tournamentController.deleteTournament);
  app.route("/tournament/").get(tournamentController.getTournaments);
  app
    .route("/tournaments/sport/:sport")
    .get(tournamentController.getTournamentBySport);

  app.route("/").get(tournamentController.getTournaments);
  
  app.route("/createTournament/").post(tournamentController.createTournament);
  

  app.route("/mainUser").get(usersController.MainUser);


};
