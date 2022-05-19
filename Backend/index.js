var createError = require("http-errors");
//store express package in express const
const express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//middleware to pass data from backend to front end
const bodyParser = require("body-parser");

//import from other files, placesRoutes is now technically a middleware
const homeRouter = require("./routes/home-card-routes");

const mongoose = require("mongoose");

const url =
  "mongodb+srv://misterplain:b1SqnjEtBpdMLXnH@cluster0.wqros.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connect = mongoose.connect(url, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
//specify which type of data to parse, could be text/html or form/data, url-encoded
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//use middleware
app.use("/home", homeRouter);

//check if there is an error code, 500 as the fallback error code
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

app.listen(5000);
