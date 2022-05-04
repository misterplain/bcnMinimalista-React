//store express package in express const
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//import from other files, placesRoutes is now technically a middleware
const homeCardRoutes = require("./routes/home-card-routes");
const HttpError = require("./models/http-error");

const app = express();
app.use(bodyParser.json());

//use middleware
app.use("/home", homeCardRoutes);

//error middleware, only be executed on requests where there is an error
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});

//check if there is an error code, 500 as the fallback error code
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

//connect to mongoose
mongoose
  .connect(
    `mongodb+srv://misterplain:b1SqnjEtBpdMLXnH@cluster0.wqros.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
