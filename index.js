const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");
const port = process.env.PORT || 8000;

require("dotenv").config();
const app = express();
app.use(cors());

app.get("/product/:id", (req, res) => {
  const headers = {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    Accept: "application/json",
  };

  fetch(`https://ean-db.com/api/v2/product/${req.params.id}`, { headers })
    .then((resp) => resp.json())
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

app.listen(port, () => {
  console.log("server successfully started on port " + port);
});

module.exports = app;
