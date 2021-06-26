const express = require("express");
const cors = require("cors");
const db = require("./database.js");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(cors());

//routes
app.use("/auction", require("./routes/auction.js"));
app.use("/category", require("./routes/category.js"));

//check connection to database
db.authenticate()
  .then(() => console.log("Connected to auctionDB database."))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 1000;
app.listen(PORT, async () => console.log(`Server listening on ${PORT}`));