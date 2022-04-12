import React, { useState } from "react";
//mui imports
import { Card, Avatar, IconButton } from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// router navigation imports
import { useNavigate } from "react-router-dom";
import DeleteModal from '../DeleteModal';
import { TPost } from '../../types';
//style import
import "./index.scss";

const PostCard = (props: { post: TPost, setFetchPosts: Function }) => {

    const { post: { user, body, _id }, setFetchPosts } = props;

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const navigate = useNavigate();

    // redirect to user-profile
    const navigateToProfile = (id: string) => {
        navigate(`/user-profile/${id}`);
    };

    // handle open and close modal
    const handleModal = (modalState: boolean, isDeleted?: false) => {
        setIsModalOpen(modalState);
        isDeleted ? setFetchPosts(true): null;
    };

    return <>
        <Card className="card">
            <div className="card-header-container ">
                <div
                    className="user-content"
                    onClick={() => navigateToProfile(user?._id)}
                >
                    <Avatar />
                    <p> {user?.username} </p>
                </div>
                <div>
                    <IconButton color="primary" onClick={() => handleModal(true)} > <RemoveCircleIcon /> </IconButton>
                </div>
            </div>
            <p> {body} </p>
        </Card>
        <DeleteModal open={isModalOpen} onClose={handleModal} id={_id} />
    </>
};
export default PostCard;