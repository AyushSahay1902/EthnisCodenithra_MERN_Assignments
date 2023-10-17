//Node
//NPM - Node Package Manager
//Nodemon - Node Monitor
//MongoDB
//Mongoose - MongoDB Object Modelling
//Express  - Web Framework
// routing - routing is the process of selecting a path for traffic in a network or between or across multiple networks.
const express = require('express');
const app = express();

// app.get(route, function)
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(3000);