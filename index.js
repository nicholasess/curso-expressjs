const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes/index");
const getToken = require("./config/getToken");

app.use(cors());

app.use("/", getToken, routes);

app.listen(3000, () => {
  console.log("Server On");
});
