const express = require("express");
const cors = require('cors');
const app = express();
const db = require('./database.js');

app.use(cors());

//routes
app.use('/auction', require('./routes/auction.js'));

//check connection to database
db.authenticate().then(() => console.log('Connected to auctionDB database.'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server listening on ${PORT}`));