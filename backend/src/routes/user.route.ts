import {Router} from 'express';
import UserController from '../controllers/user.controller';

const userRouter: Router = Router();

const userController = new UserController();

userRouter.post('/create', userController.createUser);
userRouter.get('/:id', userController.getUserById);

export default userRouter;