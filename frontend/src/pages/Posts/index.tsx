import * as React from 'react';
import { fetchPosts } from './../../api/post';

const Posts = () => {

	const [posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		handleFetchPosts();
	}, []);

	const handleFetchPosts = async () => {
		const postResponse = await fetchPosts();
		if (postResponse) {
			setPosts(postResponse);
		}
	}

	return <div> 
		{
			posts?.map((p, idx) => (<div key={`post-${idx}`}>
				<p> {p.body} </p>
			</div>))
		}
		 </div>
};
export default Posts;