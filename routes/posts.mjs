import express from 'express';

const router = express.Router();


router.get('/posts',(req,res)=> {
    console.log('posts is here b8b8')
});


router.use(express.json());
// below will be the logic for the post req
router.post('/posts', (req,res)=> {
    console.log(req.body);
})
export default router ;