import express from 'express';
import PostModel from '../models/post.model';
import { Post } from './../interfaces/post';

class PostController {

    // get all posts controller with pagination
    public getAllPosts = async (req: express.Request, res: express.Response) => {
        try {
            const { limit, page } = req?.query;
            const paginationLimit = Number(limit) || 20;
            const paginationPage = Number(page) || 1;
            const skip = (paginationPage - 1) * paginationLimit;

            const posts: Post[] = await PostModel.find().populate('user').skip(skip).limit(paginationLimit);

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

    // delete post by id
    public deletePost = async (req: express.Request, res: express.Response) => {
        try {
            const { id } = req?.params;

            const deletedProperty = await PostModel.findByIdAndDelete(id);

            if (deletedProperty) {
                res.status(200).send({
                    message: 'Deleted Successfully',
                    data: deletedProperty
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