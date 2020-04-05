const Sequelize = require('sequelize');
const sequelize = require('../config');

const Users = sequelize.define('users', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    name: {
        type: Sequelize.DATE,
        allowNull: false
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {
    tableName: 'users',
    timestamps: false
    // options
});

module.exports = Users;