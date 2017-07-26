const express = require("express");
const bodyParser = require("body-parser");
const port = 3001;
const api = require('./api/api');

// Configure app to use bodyParser to parse json data
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get("/api/check", api.checkDomain);

// Start the server
app.listen(port, () => console.log("Backend server is started on port " + port + ' Front-end started on port 3000'));
