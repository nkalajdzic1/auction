const express = require("express");
const cors = require("cors");
const db = require("./database.js");
const path = require("path");
const fs = require("fs");
const app = express();

app.use(cors());

const root = require('path').join(__dirname, '..', 'client', 'build/')

//routes
app.use("/auction", require("./routes/auction.js"));
app.use("/category", require("./routes/category.js"));
app.use("/price", require("./routes/price.js"));
app.use("/color", require("./routes/color.js"));
app.use("/size", require("./routes/size.js"));
app.use("/shop", require("./routes/shop.js"));

app.use(express.static(root));
app.get("/*", (req, res) => {
  res.sendFile('index.html', {
    root
  });
})


//check connection to database
db.authenticate()
  .then(() => console.log("Connected to auctionDB database."))
  .catch((err) => console.log(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => console.log(`Server listening on ${PORT}`));