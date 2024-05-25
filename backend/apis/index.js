const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("Successfully connect to backend");
  res.send("Express on Vercel");
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;