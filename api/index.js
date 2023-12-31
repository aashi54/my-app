const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser');


dotenv.config();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true,
}).then(console.log("connected to mongoDB")).catch((err)=> console.log(err));

// Routes
app.use(bodyParser.json());

// Routes
const loanApplicationsRouter = require('../api/routes/loanApplication');
app.use('/api/loan-applications', loanApplicationsRouter);


app.listen("5000", ()=>{
    console.log("Backend is running")
});

