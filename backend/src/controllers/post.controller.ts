import express from 'express';
import PostModel from '../models/post.model';
import { Post } from './../interfaces/post';

class PostController {

    public getAllPosts = async (req: express.Request, res: express.Response) => {
        try {
            const posts = await PostModel.find();
            if (posts) {
                res.status(200).send({
                    data: posts,
                })
            }
        } catch (err) {
            res.status(500).send({
                message: err?.message || 'Internal server error'
            });
        }
    }
}

export default PostController;