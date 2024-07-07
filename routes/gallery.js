const express = require('express');
const nodeFetch = require('node-fetch');

const response = await fetch('https://api.github.com/users/github');
const data = await response.json();
console.log(data);


const galleryRoute  = express.Router();
galleryRoute.get('/gallery', (req,res) => {

    console.log(req.query);
    console.log(req.params);

    res.send('HEHEEEFJFKSJDFNJS')
})