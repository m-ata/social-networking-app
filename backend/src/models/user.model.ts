import { model, Schema } from 'mongoose';
import { User } from './../interfaces/user';

const UserSchema = new Schema({
    username: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    about: String
  }, {timestamps: true});

const UserModel = model<User>('users', UserSchema);

export default UserModel;