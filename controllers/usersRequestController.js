const Sequelize = require('sequelize');
const Users = require('../models/user');
const Op = Sequelize.Op
const bcrypt = require('bcrypt')
const moment = require('moment')
const jwt = require('jwt-simple')

exports.getUsers = function(req, res) {

    Users.findAll({

    }).then(users => {
        res.send(users)
    });

};


exports.MainUser = function(req, res) {
    Users.findAll({
        where: {
            id: req.userId
        }
    }).then(user => {
        res.send(user)
    });
};

const createToken = (user) => {
    let payload = {
        userId: user.dataValues.id,
        createAt: moment().unix(),
        expiresAt: moment().add(1, 'day').unix()
    }
    return jwt.encode(payload, process.env.TOKEN_KEY);
};


exports.login = function(req, res) {

    Users.findAll({
        where: {
            email: req.body.email
        }

    }).then(user => {
        if (user[0] === undefined) {
            res.status(401)
            res.json({
                error: 'Error, email not found'
            })
        } else {
            pass = user[0].password
            name = user[0].name
            const equals = bcrypt.compareSync(req.body.password, pass)
            if (!equals) {
                res.status(401)
                res.json({
                    error: 'Error, email or password incorrect'
                })
            } else {
                res.json({
                    token: createToken(user[0]),
                    oka: true,
                    name

                })
            }
        }
    });

};

exports.CreateAccount = async(req, res) => {

    try {
        const user = await Users.create({
            id: req.body.id,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            name: req.body.name
        });
        return res.status(201).json({
            user,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

function ok(body) {
    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
}

function unauthorised() {
    resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
}

function error(message) {
    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
}