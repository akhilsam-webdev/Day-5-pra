const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.post("/note", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    msg: "note created suscessfully",
    notes,
  });
});

app.get("/note", (req, res) => {
  res.status(200).json({
    msg: "fetched all notes",
    notes,
  });
});

app.delete("/note/:index", (req, res) => {
  delete notes[req.params.index];

  res.status(200).json({
    msg: "note deleted susscussfully",
  });
});

app.patch("/note/:index", (req, res) => {
  notes[req.params.index].dis = req.body.dis;

  res.status(200).json({
    msg: "note diss edited sucessfully",
  });
});

app.put("/note/:index", (req, res) => {
  notes[req.params.index] = req.body;

  res.status(200).json({
    msg: "selected note updated completely",
  });
});

module.exports = app;
