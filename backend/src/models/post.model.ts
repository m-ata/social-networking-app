import { model, Schema } from 'mongoose';
import { Post } from './../interfaces/post';

const PostSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'users'
    },
    body: {
        type: String,
        required: true,
      },
  }, {timestamps: true});

const PostModel = model<Post>('posts', PostSchema);

export default PostModel;