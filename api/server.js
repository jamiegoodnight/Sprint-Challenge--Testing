const express = require("express");

const Games = require("../gamesModel/gamesModel");

const server = express();

server.use(express.json());

//

module.exports = server;
