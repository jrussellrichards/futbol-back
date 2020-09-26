const Sequelize = require('sequelize');
const sequelize = require('../config');

const Users = sequelize.define('users', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
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
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, {
    tableName: 'users',
    timestamps: false
        // options
});

module.exports = Users;