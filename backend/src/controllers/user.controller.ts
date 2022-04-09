import express from 'express';
import { User } from './../interfaces/user';
import UserModel from './../models/user.model';

class UserController {

    public createUser = async(req: express.Request, res: express.Response) => {
        try {
            const userData: User = req.body;
            const user = new UserModel({...userData});
            const savedUser = await user.save();
            if (savedUser) {
                res.status(200).send({
                    message: 'User created successfully',
                    data: savedUser
                })
            }
        } catch (err) {
            res.status(500).send({
                message: err?.message || 'Internal server error',
                data: null
            });
        } 
    }

    public getUserById = async (req: express.Request, res: express.Response) => {
        try {
            const user = await UserModel.findById(req?.params?.id);
            if (user) {
                res.status(200).send({
                    data: user
                })
            } else {
                res.status(404).send({
                    data: null,
                    message: 'User not found! '
                });
            }
        } catch (err) {
            res.status(500).send({
                message: err?.message || 'Internal server error',
                data: null
            });
        }
    }
}

export default UserController;