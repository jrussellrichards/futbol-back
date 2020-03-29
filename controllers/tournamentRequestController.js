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

// req es el objeto enviado por la ruta. para encontrar el parametro se debe utilizar req.params."el parametro enviado desde ruta"

exports.getTournamentBySport = function (req, res) {

  Tournament.findAll({
    where: {
      sport: req.params.sport
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


 exports.createTournament = async (req, res) => {
  try {
    const tournament = await Tournament.create({
      title: req.body.title,
      sport: req.body.sport,
      description: req.body.description,
      date: req.body.date,
      requierements: req.body.requierements,
      img: req.body.img,
    } );
    return res.status(201).json({
      tournament,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
// Funcion que elimina petición de react
// app.post('/eliminado', function (req, res) {
//     console.log('eliminando', req.body.ids_eliminados  )
//     connection.query('delete from tournament where id in (' + req.body.ids_eliminados+')', function (err, rows, fields) {

//       res.send('eliminado' + req.data);
//     });

//   });

