import express from 'express';
import PostModel from '../models/post.model';
import { Post } from './../interfaces/post';

class PostController {

    public getAllPosts = async (req: express.Request, res: express.Response) => {
        try {
            const { limit, page } = req?.query;
            const paginationLimit = Number(limit) || 20;
            const paginationPage = Number(page) || 1;
            const skip = (paginationPage - 1) * paginationLimit;

            const posts: Post[] = await PostModel.find().skip(skip).limit(paginationLimit);

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