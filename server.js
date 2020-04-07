const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const Routes = require('./routes/tournamentRequestRoutes');
var cors = require('cors')
app.use(express.json());
app.use(cors())
// app.options('/tournaments/', cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
  next();
});

Routes(app)


app.listen(port, () => console.log(`Listening on port ${port}`));


