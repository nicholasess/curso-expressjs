const express = require("express");
const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    return res.status(200).json("GET");
  })
  .post((req, res) => {
    return res.status(200).json("POST");
  })
  .put((req, res) => {
    return res.status(200).json("PUT");
  })
  .delete((req, res) => {
    return res.status(200).json("DELETE");
  });

Router.route("/users").get((req, res) => {
  return res.status(200).json([]);
});

module.exports = Router;
