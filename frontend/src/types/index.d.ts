export type TDialogProps = {
    open: boolean;
    id: string;
    onClose: Function
}

export type TPost = {
    _id: string;
    user: TUser;
    body: string;
}

export type TUser = {
    _id: string;
    username: string;
    email: string;
    about: string;
}
export type TFetchPostResponse = {
    data: TPost[]
}
export type TDeletePostResponse = {
    data: TPost;
}
export type TFetchUserResponse = {
    data: TUser;
}