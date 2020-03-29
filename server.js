const express = require('express');
const app = express();
var mysql = require('mysql');
const port = process.env.PORT || 5000;
const Routes = require('./routes/tournamentRequestRoutes');
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

Routes(app)


app.listen(port, () => console.log(`Listening on port ${port}`));


