const express = require('express');
const app = express();
var mysql = require('mysql');
const port = process.env.PORT || 5000;
const Routes = require('./Routes/tournamentRequestRoutes');
app.use(express.json());


Routes(app)

app.use(express.json());


app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse requests of content-type - application/json

// MONGO DB CONNECTION
// mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once("open", function() {
//   console.log("MongoDB database connection established successfully");
// });

// Base Route


// Campeonato Route

