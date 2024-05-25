const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["https://priceture-test-zqag.vercel.app/"],
    methods: ["GET"],
    credentials: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  console.log("Successfully connect to backend");
  res.send("hey");
  //   res.status(200).json({ message: "successful connect to backend" });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
