const Sequelize = require('sequelize');
const sequelize = require('../config');

const Tournament = sequelize.define('tournament', {
    // attributes
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true

    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    requierements: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sport: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'tournaments',
    timestamps: false
    // options
});

module.exports = Tournament;