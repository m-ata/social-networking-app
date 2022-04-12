import * as React from "react";
//custom imports
import { fetchPosts } from "./../../api/post";
import { WithLoader } from "../../components/WithLoader/WithLoader";
import { LoaderContext } from "../../Routing";
import PostCard from './../../components/PostCard';

const Posts = () => {
  const [_, setIsloading] = React.useContext(LoaderContext);

  const [posts, setPosts] = React.useState([]);

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

  return (
    <div>
      {posts?.map((p, idx) => (
        <PostCard post={p} key={idx} />
      ))}
    </div>
  );
};
export default WithLoader(Posts);
