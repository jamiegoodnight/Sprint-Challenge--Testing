const request = require("supertest");

const server = require("./server");

const games = [
  {
    title: "Pacman", // required
    genre: "Arcade", // required
    releaseYear: 1980 // not required
  }
];

describe("server CRUD", () => {
  describe("GET", () => {
    it("should respond with 200 OK", () => {
      return request(server)
        .get("/games")
        .expect(200);
    });
    it("should respond with JSON", () => {
      return request(server)
        .get("/games")
        .expect("Content-Type", /json/);
    });
    it("should respond with games", () => {
      return request(server)
        .get("/games")
        .expect(games);
    });
  });
  describe("POST", () => {
    it("should respond with 201 created", () => {
        return request(server)
    .post("/addGame")
    .send({title: "Sonic", genre: "Platformer"})
    .expect(201);
    }
  });
  it("should respond with JSON",)
});
