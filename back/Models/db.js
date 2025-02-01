const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN;

mongoose.connect(mongo_url)
    .then(() => {
        console.log("DATABASE CONNECTED...");
    }).catch((err) => {
        console.log("DATABASE CONNECTION ERROR:", err);
    })