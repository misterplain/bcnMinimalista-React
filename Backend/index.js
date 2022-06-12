const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

//import routes
const homeRoutes = require('./routes/home')

//app
const app = express();

//mongoose
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Error => ", err));

//middleware
app.use(cors()); //error handling
app.use(morgan("dev")); //show you endpoints in the terminal
app.use(bodyParser.json()); //request data in json format

//post as middleware
app.use('/v1/api', homeRoutes)

//listen so that app can return response on port, port info on env file
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});