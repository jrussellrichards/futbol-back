const Sequelize = require('sequelize');
const Users = require('../models/user');
const Op = Sequelize.Op 
const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jwt-simple')

exports.getUsers = function (req, res) {

  Users.findAll({

  }).then(users => {
    res.send(users)
  });

};

const getUserById = function (pId) {

  Users.findAll({
    where: {
      id: pId
    }
  }).then(user => {
    return user[0]
  });

};
exports.MainUser = function (req, res) {
  user=getUserById(req.userId)
  res.send(req.user)

};
const createToken = (user) => {
  let payload = {
    userId: user.id,
    createAt: moment().unix(),
    expiresAt: moment().add(1,'day').unix()
  }
  return jwt.encode(payload, process.env.TOKEN_KEY);
};


exports.login = function (req, res) {

    Users.findAll({
    where: {
      email: req.body.email
    }
    
    }).then(user => {
      pass = user[0].password
      const equals = bcrypt.compareSync(req.body.password,pass)
      if(!equals){
      res.json({
          error: 'Error, email or password incorrect'
      })
      }
      else{
          res.json({
              succesfull: createToken(user[0]),
              done: 'login correct'
          })
      }
    });
  
  };

exports.createUser = async (req, res) => {
    
    try {
      const user = await Users.create({
        id: req.body.id,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password,10),
        name: req.body.name,
        surname: req.body.surname,
      } );
      return res.status(201).json({
        user,
      });
    } catch (error) {
      return res.status(500).json({error: error.message})
    }
  }

