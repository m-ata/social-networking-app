import * as React from "react";
import { fetchPosts } from "./../../api/post";
import { Card, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { WithLoader } from "../../components/WithLoader/WithLoader";
import { LoaderContext } from "../../Routing";

import "./index.scss";

const Posts = () => {
  const [_, setIsloading] = React.useContext(LoaderContext);

  const [posts, setPosts] = React.useState([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    handleFetchPosts();
  }, []);

  const handleFetchPosts = async () => {
	setIsloading(true);
    const postResponse = await fetchPosts();
    if (postResponse) {
      setPosts(postResponse);
    }
	setIsloading(false);
  };

  const navigateToProfile = (user: any) => {
    navigate(`/user-profile/${user._id}`);
  };

  return (
    <div>
      {posts?.map((p, idx) => (
        <Card key={`post-${idx}`} className="card">
          <div
            className="user-content"
            onClick={() => navigateToProfile(p?.user)}
          >
            <Avatar />
            <p> {p.user.username} </p>
          </div>
          <p> {p.body} </p>
        </Card>
      ))}
    </div>
  );
};
export default WithLoader(Posts);
