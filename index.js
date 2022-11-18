// const data = require('./single.json');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
var bodyParser = require('body-parser')
const app = express();
const College = require("./models/College.js");
const collegeRoutes = require('./routes/College');
require('dotenv').config();

app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
app.use('/', collegeRoutes);

mongoose.connect(
    "mongodb+srv://Manish:Manish4044@cluster0.gbmrq.mongodb.net/college?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
).then(() => console.log("Connection Successful"))
.catch(err => console.log(err));

app.listen(4000, () => console.log("Server running at 4000"));
