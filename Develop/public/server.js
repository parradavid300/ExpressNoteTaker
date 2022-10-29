const express = require("express");
const path = require("path");
const fs = require("fs");
const notes = require("../db/db.json");
const uuid = require("uuid");


const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));



app.listen(PORT, () =>
    console.log(`Server listening on PORT: ${PORT}`)
)