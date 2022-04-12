import React, { useState } from "react";
//custom imports
import { fetchPosts } from "./../../api/post";
import { WithLoader } from "../../components/WithLoader";
import { LoaderContext } from "../../Routing";
import PostCard from './../../components/PostCard';

const Posts = () => {
  const [_, setIsloading] = React.useContext(LoaderContext);

  const [posts, setPosts] = React.useState([]);
  const [isFetchPosts, setIsFetchPosts] = useState<boolean>(true);

  React.useEffect(() => {
    if (isFetchPosts) {
      handleFetchPosts();
      setIsFetchPosts(false);
    }
  }, [isFetchPosts]);

  const handleFetchPosts = async () => {
    setIsloading(true);
    const postResponse = await fetchPosts();
    if (postResponse) {
      setPosts(postResponse);
    }
    setIsloading(false);
  };

  return (
    <div>
      {posts?.map((p, idx) => (
        <PostCard post={p} key={idx} setFetchPosts={setIsFetchPosts} />
      ))}
    </div>
  );
};
export default WithLoader(Posts);
