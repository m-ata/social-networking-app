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