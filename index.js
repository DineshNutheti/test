const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use( function(err, req, res, next){
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
  });


app.get("/get", async function(req, res){
    res.status(200).json({ message: 'Connected to server from frontend' });
});

app.listen(3000);
