const connection = require('../config');
const Sequelize = require('sequelize');
const Tournament = require('../models/tournament');
const Op = Sequelize.Op 

exports.getTournament = function (req, res) {

  Tournament.findAll({
    where: {
      id:
      {
        [Op.in]: req.params.tournamentId.split(',')
      }

    }
  }).then(tournament => {
    res.send(tournament)
  });

};


exports.getTournaments = function (req, res) {
  Tournament.findAll().then(tournament => {
    res.send(tournament);
  });

};


exports.deleteTournament = function (req, res) {
  Tournament.destroy({
    where: {
      id:
      {
        [Op.in]: req.params.tournamentId.split(',')
      }

    }
  });

};

// Funcion que elimina petición de react
// app.post('/eliminado', function (req, res) {
//     console.log('eliminando', req.body.ids_eliminados  )
//     connection.query('delete from tournament where id in (' + req.body.ids_eliminados+')', function (err, rows, fields) {

//       res.send('eliminado' + req.data);
//     });

//   });

