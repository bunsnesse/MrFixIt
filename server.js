const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes/index");
//var fallback = require('express-history-api-fallback')
var history = require('connect-history-api-fallback');

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
app.use(history());

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/joblist", { useNewUrlParser: true });

// Define middleware here
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// const apiRoutes = require('./routes');

//app.use('/', apiRoutes);
//--//////// Ends mongo exercise (Removed the server)


//app.use('/', fallback('index.html', { root: root }))


app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });
var root = __dirname + '/client/build';
app.use('/', express.static(root))


app.listen(PORT, () => {
  console.log(`🌎 ==> App running on port ${PORT}!`);
});
