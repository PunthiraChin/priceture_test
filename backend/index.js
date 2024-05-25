const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["priceture-test-backend.vercel.app"],
    methods: ["GET"],
    credentials: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  console.log("Successfully connect to backend");
  res.json({ message: "successful connect to backend" });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
