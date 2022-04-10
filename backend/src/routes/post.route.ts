import {Router} from 'express';
import PostController from '../controllers/post.controller';

const postRouter: Router = Router();

const postController = new PostController();

postRouter.get('/all', postController.getAllPosts);

export default postRouter;