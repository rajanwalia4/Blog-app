// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin-rajan:baazigar123@cluster0.z7xro.mongodb.net/blogDB', {useNewUrlParser: true, useUnifiedTopology: true});

//acquire the connection(to check if it's successful)
const db = mongoose.connection;

//error
db.on('error', function(err) { console.log(err.message); });

//up and running then print the message
db.once('open', function() {
    console.log("Successfully connected to the database");
});

