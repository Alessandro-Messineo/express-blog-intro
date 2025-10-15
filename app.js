// importo express
const express = require("express");
// creiamo un istanza di express
const app = express();
// numero della porta da utilizzare
const port = 3001;

app.use(express.static('public'));

// rotta di default
app.get("/",(req, res) =>{
    res.send(`<h1> Server del mio blog </h1>`)
})

// rotta della bacheca
app.get("/bacheca",(req, res) =>{
    const posts = [
        {
            titolo: "ciambellone",
            contenuto: "ciambella grossa",
            image: "images/ciambellone.jpeg",
            tags: ["ciambellone","cibo","ciambella"]
        },
        {
            titolo: "cracker",
            contenuto: "cracker alla barbabietola",
            image: "images/cracker_barbabietola.jpeg",
            tags: ["cracker","cibo","barbabietola"]
        },
        {
            titolo: "pane fritto",
            contenuto: "pane fritto dolce",
            image: "images/pane_fritto_dolce.jpeg",
            tags: ["pane","cibo","fritto"]
        },
        {
            titolo: "pasta barbabietola",
            contenuto: "pasta alla barbabietola",
            image: "images/pasta_barbabietola.jpeg",
            tags: ["pasta","cibo","barbabietola"]
        },
        {
            titolo: "torta paesana",
            contenuto: "torta di paese",
            image: "images/torta_paesana.jpeg",
            tags: ["torta","cibo","paesana"]
        }
    ]

    res.json(posts);
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
