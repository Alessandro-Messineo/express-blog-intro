// importo express
const express = require("express");
// creiamo un istanza di express
const app = express();
// numero della porta da utilizzare
const port = 3000;

app.use(express.static('public'));

// rotta di default
app.get("/",(rep, res) =>{
    res.send(`<h1> Server del mio blog </h1>`)
})

