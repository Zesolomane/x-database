import express from 'express';
// import fetch from 'node-fetch';

// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();
// console.log(data);


const galleryRoute  = express.Router();
galleryRoute.get('/gallery', (req,res) => {

    
    res.status(200).send('hello world');

});

galleryRoute.get('/gallery/:id', (req, res)=> {
    console.log(req.params);
    res.send('Finding param')
})
galleryRoute.get('/gallery', (req,res)=>{
    console.log(req.query);
    res.send('finding query');
})

galleryRoute.post('/gallery', (req,res)=> {
    const { name, description, password} = req.body;
    res.sendStatus(200);
    
})
// module.exports = galleryRoute;
export default galleryRoute;