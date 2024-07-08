import express from 'express';
// import fetch from 'node-fetch';

// const response = await fetch('https://api.github.com/users/github');
// const data = await response.json();
// console.log(data);


const galleryRoute  = express.Router();
galleryRoute.get('/gallery', (req,res) => {

    console.log(req.query);
    if (req.query){
        console.log(req.query)
        res.send('well we got your queryt')
    }
    if (req.params){
        console.log(req.params)
        res.send('Well we got your params')
    }
    

    res.send('HEHEEEFJFKSJDFNJS')
});

galleryRoute.post('/gallery', (req,res)=> {
    const { name, description, password} = req.body;
    res.send('well we got your post')
    
})
// module.exports = galleryRoute;
export default galleryRoute;