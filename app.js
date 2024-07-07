const express = require('express');
const app = express();
const port = 3000;

// routes
const posts = require('./routes/posts');
app.use('/', posts);


// learn about route params
// query params

// then create a cookie for the pages

// then create a session middleware that applies to each page

// add authentication
//then create a database



app.listen(port, ()=>{
    console.log('This route is working');
    
})