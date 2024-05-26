import express from 'express';
import {getPosts,postPost} from '../controllers/posts.js'
const router = express.Router();

router.get('/posts', getPosts)
router.post('/addpost',postPost)

export default router