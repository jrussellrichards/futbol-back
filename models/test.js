'use strict';
module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define('Test', {
    Name: DataTypes.STRING
  }, {});
  Test.associate = function(models) {
    // associations can be defined here
  };
  return Test;
};