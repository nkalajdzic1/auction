const express = require("express");
const cors = require('cors');
const app = express();
const db = require('./database.js');
const path = require('path');

app.use(cors());

app.use(express.static(path.join(__dirname, '..', 'client', 'src')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'client', 'src', 'index.tsx'));
});

//routes
app.use('/auction', require('./routes/auction.js'));

//check connection to database
db.authenticate().then(() => console.log('Connected to auctionDB database.'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server listening on ${PORT}`));