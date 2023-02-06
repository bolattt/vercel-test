const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./dbConfig");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ body: "hello" + Date.now() });
});

app.get("/api/songs", async (req, res) => {
  try {
    const songs = await db.any("SELECT * FROM songs");
    console.log(songs);
    res.json(songs);
  } catch (error) {
    console.log(error);
    res.json(400).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});

module.exports = app;
