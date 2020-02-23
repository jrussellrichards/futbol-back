const Sequelize = require('sequelize');
var mysql = require('mysql');

module.exports = new Sequelize('museonat_futbol', 'museonat_javier', 'javier123.', {
  host: 'ftp.museonaturalia.cl',
  dialect:  'mysql'
});



// module.exports  = mysql.createConnection({
//   host: 'ftp.museonaturalia.cl',
//   user: 'museonat_javier',
//   password: 'javier123.',
//   database: 'museonat_shells'
    
// });
