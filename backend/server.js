const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');


const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const uri = process.env.MONGO_URI;

// Connect and configure to MongoDB Database
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(err));


// Connect and configure Express
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

// Import Express routes
require('./routes')(app);


// Start Express Server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
