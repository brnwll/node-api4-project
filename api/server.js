const cors = require("cors");
const express = require("express");
const User = require("../model/users");

const server = express();
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.json({ message: "Welcome to our API" });
});

server.get("/api/users", (req, res) => {
  const users = User.getAll();
  res.json(users);
});

server.post("/api/register", (req, res) => {
  const user = User.register(req.body);
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400).json({ message: "Invalid user" });
  }
});

server.post("/api/login", (req, res) => {
  const message = User.login(req.body);
  if (message) {
    res.status(200).json({ message });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
});

server.post("/api/reset", (req, res) => {
  User.reset();
  res.status(200).json({ message: "Users reset" });
});

module.exports = server;
