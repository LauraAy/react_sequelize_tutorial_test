const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
//parse request of content-type - application/json
app.use(express.json());
//parse requests of content-type - application/x-www-form
app.use(express.urlencoded({ extended: true }));
//simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Aydelotte application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log('Server is running on port ${Port}.');
});

const app = express();
app.use(...);
const db = require("./app/models");
db.sequelize.sync();
//db.sequelize.sync({ force: true }).then(() => {console.log("Drop and re-sync db.");})