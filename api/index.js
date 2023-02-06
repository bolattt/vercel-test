const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT;

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json({ body: "hello" + Date.now() });
});

app.listen(PORT, () => {
  console.log("server started on port " + PORT);
});

module.exports = app;
