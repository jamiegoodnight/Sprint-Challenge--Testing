const express = require("express");

// const Games = require("../gamesModel/gamesModel"); Not needed for MVP

const server = express();

server.use(express.json());

let games = [
  {
    title: "Pacman", // required
    genre: "Arcade", // required
    releaseYear: 1980 // not required
  }
];

server.get("/games", (req, res) => {
  res.status(200).json(games);
});

server.post("/games", (req, res) => {
  const newGame = req.body;

  if (newGame.title && newGame.genre) {
    games.push(newGame);
    res.status(201).json(newGame);
  } else {
    res
      .status(422)
      .res({ message: "Please provide a title and genre for your game!" });
  }
});

module.exports = server;
//
