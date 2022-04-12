import * as React from "react";
//mui imports
import { Card, Avatar, IconButton } from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// router navigation imports
import { useNavigate } from "react-router-dom";
//style import
import "./index.scss";

const PostCard = (props: any) => {

    const { post: { user, body  } } = props;

    const navigate = useNavigate();

    const navigateToProfile = (user: any) => {
        navigate(`/user-profile/${user._id}`);
    };

    return <Card className="card">
    <div className="card-header-container ">
      <div
        className="user-content"
        onClick={() => navigateToProfile(user?._id)}
      >
        <Avatar />
        <p> {user?.username} </p>

      </div>
      <div>
        <IconButton color="primary"> <RemoveCircleIcon /> </IconButton>
      </div>
    </div>
    <p> {body} </p>
  </Card>
};
export default PostCard;