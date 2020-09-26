const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const Routes = require('./routes/tournamentRequestRoutes');
var cors = require('cors')
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
app.use(express.json());
app.use(cors())
    // app.options('/tournaments/', cors())
    // Set up Auth0 configuration
const authConfig = {
    domain: "dev-prq45he6.auth0.com",
    audience: "http://localhost:5000/tournaments"
};

const checkJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithm: ["RS256"]
});

app.get("/api/external", checkJwt, (req, res) => {
    res.send({
        msg: "Your Access Token was successfully validated!"
    });
});


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
    next();
});

Routes(app)


app.listen(port, () => console.log(`Listening on port ${port}`));