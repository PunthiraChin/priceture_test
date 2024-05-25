const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();
let COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;

app.use(
  cors({
    origin: ["https://priceture-test-zqag.vercel.app"],
    methods: ["GET"],
    credentials: true,
  })
);
app.use(express.json());
app.get("/", async (req, res) => {
  console.log("Your request is being processed");
  // Replace selectedAsset with data from request body
  const selectedAsset = "bitcoin";
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${selectedAsset}&vs_currencies=usd&x_cg_demo_api_key=${COINGECKO_API_KEY}`
  );
  //   console.log(response.data[selectedAsset].usd);
  const assetPrice = response.data[selectedAsset].usd;
  console.log("Requested asset price", assetPrice);
  res.json({ assetPrice });
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
