import express from 'express';
const router = express.Router();
import {query} from 'express-validator';


router.get('/login',(req, res ) => {
    console.log('red');
//   res.send(200).sendStatus('<p> The login page has rendered</p>'); 
  res.sendStatus(200)
})

router.post('/login',express.json(),(req, res ) => {
    console.log(req.body);
    if (req.body) {
        res.status(200).sendStatus('<p> some text</p>')
    }   else {
        res.status(400).sendStatus('<p>Nothing sent so now invalid</p>')
    }
    
  })

export default router; 